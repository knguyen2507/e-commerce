'use strict'

// models
const _Product = require('../models/product.model');
// utils
const { getData } = require('../utils');

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
}

// export module
module.exports = {
    get_all_products
}