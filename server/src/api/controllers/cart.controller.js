'use strict'

// services
const {
    get_cart_by_id,
    add_product_to_cart,
    reduce_product_in_cart,
    remove_product_from_cart
} = require('../services/cart.service');

// get cart by id
const getCartById = async (req, res) => {
    const id = req.params.id;

    const {code, message, metadata} = await get_cart_by_id({id});

    return res.status(code).json({
        code, message, metadata
    });
};
// add product to cart
const addProductToCart = async (req, res) => {
    const id = req.params.id;
    const product = req.body;

    const {code, message} = await add_product_to_cart({id, product});

    return res.status(code).json({
        code, message
    });
};
// reduce the qty product in cart
const reduceProductInCart = async (req, res) => {
    const id = req.params.id;
    const idProduct = req.body.id;

    const {code, message} = await reduce_product_in_cart({id, idProduct});

    return res.status(code).json({
        code, message
    });
};
// remove product from cart
const removeProductFromCart = async (req, res) => {
    const id = req.params.id;
    const idProduct = req.body.id;

    const {code, message} = await remove_product_from_cart({id, idProduct});

    return res.status(code).json({
        code, message
    });
};

// export module
module.exports = {
    getCartById,
    addProductToCart,
    reduceProductInCart,
    removeProductFromCart
};