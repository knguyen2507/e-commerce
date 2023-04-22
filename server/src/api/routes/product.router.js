'use strict'

const express = require('express');
// controllers
const { 
    getAllProducts,
    getProductById,
    searchProduct
} = require('../controllers/product.controller');
// middlewares

const router = express.Router();

router.get('/get-all-products', getAllProducts);
router.post('/search', searchProduct);
router.post('/:id', getProductById);

// export module
module.exports = router;