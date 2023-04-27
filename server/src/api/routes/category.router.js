'use strict'

const express = require('express');
// controllers
const { 
    getAllCategories,
    getProductByCategory 
} = require('../controllers/category.controller');
// middlewares

const router = express.Router();

router.get('/get-all-categories', getAllCategories);
router.get('/:category/products', getProductByCategory);

module.exports = router;