'use strict'

const express = require('express');
// controllers
const { 
    getAllUsers,
    logIn,
    logOut 
} = require('../controllers/user.controller');
// middlewares
const {
    checkLogin
} = require('../middlewares/user.middleware');
const { verifyAccessToken} = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/login', [checkLogin], logIn);
router.post('/logout', [verifyAccessToken], logOut);

// export module
module.exports = router;