'use strict'

const express = require('express');
// controllers
const { getAllProducts } = require('../controllers/product.controller');
// middlewares

const router = express.Router();

router.get('/get-all-products', getAllProducts);

// export module
module.exports = router;