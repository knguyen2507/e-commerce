'use strict'

const express = require('express');
// controllers
const { getAllUsers } = require('../controllers/user.controller');
// middlewares

const router = express.Router();

router.get('/get-all-users', getAllUsers);

// export module
module.exports = router;