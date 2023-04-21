'use strict'

// services
const { get_all_products } = require('../services/product.service');

// get all products
const getAllProducts = async (req, res) => {
    const {code, metadata, message} = await get_all_products({});
    
    return res.status(code).json({
        code, metadata, message
    });
}

// export module
module.exports = {
    getAllProducts
}