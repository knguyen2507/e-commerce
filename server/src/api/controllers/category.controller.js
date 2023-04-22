'use strict'

// services
const { 
    get_all_categories,
    get_product_by_category 
} = require('../services/category.service');

// get all categories
const getAllCategories = async (req, res) => {
    const {code, metadata, message} = await get_all_categories();

    return res.status(code).json({
        code, metadata, message
    });
}
// get product by brand
const getProductByCategory = async (req, res) => {
    const idCategory = req.params.category
    const {code, metadata, message} = await get_product_by_category({idCategory});

    return res.status(code).json({
        code, metadata, message
    })
};

// export module
module.exports = {
    getAllCategories,
    getProductByCategory
}