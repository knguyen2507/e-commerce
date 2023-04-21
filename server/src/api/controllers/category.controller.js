'use strict'

// services
const { get_all_categories } = require('../services/category.service');

// get all categories
const getAllCategories = async (req, res) => {
    const {code, metadata, message} = await get_all_categories();

    return res.status(code).json({
        code, metadata, message
    });
}

// export module
module.exports = {
    getAllCategories
}