'use strict'

// models
const _Product = require('../models/product.model');
const _Category = require('../models/category.model');

// get all categories
const get_all_categories = async () => {
    const categories = await _Category.find({});
    if (!categories) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    return {
        code: 200,
        metadata: {
            categories
        }
    }
};
// get product by category
const get_product_by_category = async ({idCategory}) => {
    const products = await _Product.find({idCategory: idCategory});
    if (products.length === 0) {
        return {
            code: 401,
            message: "Category not exist in database!"
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
    get_all_categories,
    get_product_by_category
};