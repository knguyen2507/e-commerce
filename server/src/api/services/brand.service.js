'use strict'

// models
const _Product = require('../models/product.model');
const _Brand = require('../models/brand.model');
// utils


// get all brands
const get_all_brands = async () => {
    const brands = await _Brand.find({});
    if (!brands) {
        return {
            code: 500,
            message: 'Internal Server Error'
        }
    }

    return {
        code: 200,
        metadata: {
            brands
        }
    }
};
// get product by brand
const get_product_by_brand = async ({idBrand}) => {
    const brand = await _Brand.findOne({id: idBrand});
    if (brand.length === 0) {
        return {
            code: 401,
            message: "Brand not exist in database!"
        }
    }
    const products = await _Product.find({brand: brand.name});
    if (products.length === 0) {
        return {
            code: 401,
            message: "Brand not exist in database!"
        }
    }
    return {
        code: 200,
        metadata: {
            products
        }
    }
};

// export module
module.exports = {
    get_all_brands,
    get_product_by_brand
}