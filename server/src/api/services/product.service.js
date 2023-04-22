'use strict'

// models
const _Product = require('../models/product.model');
// utils

// get all products
const get_all_products = async () => {
    const products = await _Product.find({});
    if (!products) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    return {
        code: 200,
        metadata: {
            products
        }
    }
};
// get product by id
const get_product_by_id = async ({id}) => {
    const product = await _Product.findOne({id});
    if (!product) {
        return {
            code: 401,
            message: "Product not exist in database!"
        }
    }
    return {
        code: 200,
        metadata: {
            product
        }
    }
};

// export module
module.exports = {
    get_all_products,
    get_product_by_id
}