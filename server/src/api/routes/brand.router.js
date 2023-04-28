'use strict'

const express = require('express');
// controllers
const { 
    getAllBrands,
    getProductByBrand,
    getBrandByName 
} = require('../controllers/brand.controller');
// middlewares


const router = express.Router();
router.get('/get-all-brands', getAllBrands)
router.get('/:brand/products', getProductByBrand);
router.get('/:id', getBrandByName);

// export module
module.exports = router;