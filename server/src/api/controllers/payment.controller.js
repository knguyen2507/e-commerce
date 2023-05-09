'use strict'

// services
const {
    get_all_payments,
    get_all_history_payments,
    payment_cart,
    cancel_payment,
    confirm_payment
} = require('../services/payment.service');

// get all payments
const getAllPayments = async (req, res) => {
    const {code, metadata, message} = await get_all_payments({});
    
    return res.status(code).json({
        code, metadata, message
    });
};
// get all history payments
const getAllHistoryPayments = async (req, res) => {
    const {code, metadata, message} = await get_all_history_payments({});
    
    return res.status(code).json({
        code, metadata, message
    });
};
// customer request payment
const paymentCart = async (req, res) => {
    const id = req.params.id;

    if (id !== req.user_id) {
        return res.status(401).json({
            code: 401, message: "You does not have access!"
        });
    }

    const {code, message} = await payment_cart({id});

    return res.status(code).json({
        code, message
    });
};
// customer cancel payment
const cancelPayment = async (req, res) => {
    const id = req.params.id;
    const idPayment = req.params.idPayment;

    if (id !== req.user_id) {
        return res.status(401).json({
            code: 401, message: "You does not have access!"
        });
    }

    const {code, message} = await cancel_payment({id: idPayment});

    return res.status(code).json({
        code, message
    });
};
// admin cancel payment
const cancelPaymentByAdmin = async (req, res) => {
    const id = req.params.id;

    const {code, message} = await cancel_payment({id: id});

    return res.status(code).json({
        code, message
    });
};
// confirm a payment
const confirmPayment = async (req, res) => {
    const id = req.params.id;

    const {code, message} = await confirm_payment({id});

    return res.status(code).json({
        code, message
    });
};

// export module
module.exports = {
    getAllPayments,
    getAllHistoryPayments,
    paymentCart,
    cancelPayment,
    cancelPaymentByAdmin,
    confirmPayment
};