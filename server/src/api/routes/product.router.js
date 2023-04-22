'use strict'

const express = require('express');
// controllers
const { 
    getAllProducts,
    getProductById
} = require('../controllers/product.controller');
// middlewares

const router = express.Router();

router.get('/get-all-products', getAllProducts);
router.post('/:id', getProductById);

// export module
module.exports = router;