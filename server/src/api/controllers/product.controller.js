'use strict'

// services
const { 
    get_all_products,
    get_product_by_id,
    search_product
} = require('../services/product.service');

// get all products
const getAllProducts = async (req, res) => {
    const {code, metadata, message} = await get_all_products({});
    
    return res.status(code).json({
        code, metadata, message
    });
};
// get product by id
const getProductById = async (req, res) => {
    const id = req.params.id;
    const {code, metadata, message} = await get_product_by_id({id});
    
    return res.status(code).json({
        code, metadata, message
    });
};

// export module
module.exports = {
    getAllProducts,
    getProductById
}