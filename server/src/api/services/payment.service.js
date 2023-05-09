'use strict'

// models 
const _Payment = require('../models/payment.model');
const _Cart = require('../models/cart.model');
const _Product = require('../models/product.model');
const _HistoryPayment = require('../models/historyPayment.model');

// get all payments
const get_all_payments = async () => {
    const payments = await _Payment.find();
    
    return {
        code: 201,
        message: "Get all Payments",
        metadata: payments
    }
};
// get all history payments
const get_all_history_payments = async () => {
    const historyPayments = await _HistoryPayment.find();
    
    return {
        code: 201,
        message: "Get all History Payments",
        metadata: historyPayments
    }
}

// Customer request payment
const payment_cart = async ({id}) => {
    const cart = await _Cart.findOne({id});
    if (!cart) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    const NewPayment = {
        id: cart.id,
        products: cart.cart
    };

    await _Payment.create(NewPayment);
    await _Cart.updateOne({id}, {$set: {cart: []}});

    return {
        code: 201,
        message: `${cart._id} is currently awaiting payment`
    }
};
// Cancel payment
const cancel_payment = async({id}) => {
    const payment = await _Payment.findOne({_id: id});
    if (!payment) {
        return {
            code: 401,
            message: `Not have requesting payment`
        }
    }

    await _Payment.deleteOne({_id: id});

    for (let product of payment.products) {
        const prod = await _Product.findOne({id: product.id})
        await _Product.updateOne({id: product.id}, {$set: {qty: product.qty + prod.qty}});
    }

    return {
        code: 201,
        message: "Cancel Payment Successfully!"
    }
}
// confirm a payment
const confirm_payment = async ({id}) => {
    const payment = await _Payment.findOne({_id: id});
    if (!payment) {
        return {
            code: 401,
            message: `Not have requesting payment`
        }
    }

    const NewHistoryPayment = {
        id: payment.id,
        products: payment.products
    };

    await _HistoryPayment.create(NewHistoryPayment);
    await _Payment.deleteOne({_id: id});

    return {
        code: 201,
        message: "Payment Successfully!"
    }
}

// export module
module.exports = {
    get_all_payments,
    get_all_history_payments,
    payment_cart,
    cancel_payment,
    confirm_payment
}