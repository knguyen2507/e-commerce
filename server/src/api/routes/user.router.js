'use strict'

const express = require('express');
// controllers
const { 
    getAllUsers,
    getUserById,
    logIn,
    refreshToken,
    logOut,
    signUpGuest 
} = require('../controllers/user.controller');
// middlewares
const {
    checkLogin,
    checkRegister
} = require('../middlewares/user.middleware');
const { 
    verifyAccessToken,
    verifyRefreshToken
} = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/login', [checkLogin], logIn);
router.post('/refresh-token', [verifyRefreshToken], refreshToken);
router.delete('/logout', [verifyRefreshToken], logOut);
router.post('/register', [checkRegister], signUpGuest);
router.get('/:id', [verifyAccessToken], getUserById);

// export module
module.exports = router;