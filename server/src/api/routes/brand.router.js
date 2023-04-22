'use strict'

const express = require('express');
// controllers
const { 
    getAllBrands,
    getProductByBrand 
} = require('../controllers/brand.controller');
// middlewares


const router = express.Router();
router.get('/get-all-brands', getAllBrands)
router.post('/:brand/products', getProductByBrand);

// export module
module.exports = router;