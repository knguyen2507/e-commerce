'use strict'

const express = require('express');
// controllers
const { getAllCategories } = require('../controllers/category.controller');

const router = express.Router();

router.get('/get-all-categories', getAllCategories);

module.exports = router;