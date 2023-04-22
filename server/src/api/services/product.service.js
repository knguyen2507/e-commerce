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

// find products
const search_product = async ({key}) => {
    const keys = key.split(' ');
    let products = [];

    for (let i of keys) {
        const listProduct = await _Product.find({name: {"$regex": i, "$options": "i"}});
        products = products.concat(listProduct);
    }

    let op = [];
    if (keys.length > 1) {
        for (let i=0; i < products.length - 1; i++) {
            for (let j=i+1; j < products.length; j++) {
                if (products[i].id === products[j].id) {
                    op.push(products[i]);
                }
            }
        }
    } else {
        op = [...products];
    }

    if (products.length == 0) {
        return {
            code: 201,
            metadata: {products: []},
            message: `No results found for ${key}`
        }
    }

    return {
        code: 201,
        metadata: {
            products: op
        },
        message: "Successfully"
    }
}

// export module
module.exports = {
    get_all_products,
    get_product_by_id,
    search_product
}