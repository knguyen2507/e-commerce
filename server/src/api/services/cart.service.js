'use strict'

// models
const _Cart = require('../models/cart.model');
const _Product = require('../models/product.model');
// get cart by id
const get_cart_by_id = async ({id}) => {
    const cart = await _Cart.findOne({id});
    if (!cart) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    return {
        code: 201,
        metadata: cart
    }
};
// add product to cart
const add_product_to_cart = async ({id, product}) => {
    const cart = await _Cart.findOne({id});
    if (!cart) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }

    const productsInCart = cart.cart;
    const productInCart = await _Cart.findOne(
        {
            id: id
        }, {
            cart: {$elemMatch: {id: product.id}}
        }
    );

    const productInInventory = await _Product.findOne({id: product.id});

    if (productInInventory.qty < product.qty) {
        return {
            code: 401,
            message: "You buy more than the qty of product in stock"
        }
    }

    await _Product.updateOne({id: product.id}, {$set: {qty: productInInventory.qty - product.qty}});
    
    if (productInCart.cart.length > 0) {
        await _Cart.updateOne(
            {
                id,
                'cart.id': product.id
            }, {
                $set: { "cart.$.qty" : productInCart.cart[0].qty + product.qty }
            }
        )
    } else {
        productsInCart.push(product);
        await _Cart.updateOne({id}, {$set: {cart: productsInCart}});
    }

    return {
        code: 201,
        message: `Add product ${product.name} Successfully!`
    }
};
// reduce the qty product in cart
const reduce_product_in_cart = async ({id, idProduct}) => {
    const cart = await _Cart.findOne({id});
    const product = await _Product.findOne({id: idProduct});
    if (!cart) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }

    const productInCart = await _Cart.findOne(
        {
            id: id
        }, {
            cart: {$elemMatch: {id: idProduct}}
        }
    );
    console.log(`productInCart:::`, productInCart);

    if (productInCart.cart[0].qty === 1) {
        return remove_product_from_cart({id, idProduct});
    };

    await _Cart.updateOne(
        {
            id,
            'cart.id': idProduct
        }, {
            $set: { "cart.$.qty" : productInCart.cart[0].qty - 1 }
        }
    )

    await _Product.updateOne({id: idProduct}, {$set: {qty: product.qty + 1}});

    return {
        code: 201,
        message: `Reduce 1 item ${product.name} from Cart!`
    }
};
// remove product from cart
const remove_product_from_cart = async ({id, idProduct}) => {
    const cart = await _Cart.findOne({id});
    if (!cart) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }

    const productInCart = await _Cart.findOne(
        {
            id: id
        }, {
            cart: {$elemMatch: {id: idProduct}}
        }
    );

    const qty = productInCart.cart[0].qty;
    const product = await _Product.findOne({id: idProduct});

    await _Cart.update(
        {id},
        { $pull: { 'cart': { id: idProduct } } }
    );

    await _Product.updateOne({id: idProduct}, {$set: {qty: qty + product.qty}});

    return {
        code: 201,
        message: `Remove product ${product.name} from Cart!`
    }
}

// export module
module.exports = {
    get_cart_by_id,
    add_product_to_cart,
    reduce_product_in_cart,
    remove_product_from_cart
};