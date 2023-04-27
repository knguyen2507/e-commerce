'use strict'

const express = require('express');
// controllers
const { 
    getAllUsers,
    getUserById,
    logIn,
    refreshToken,
    logOut 
} = require('../controllers/user.controller');
// middlewares
const {
    checkLogin
} = require('../middlewares/user.middleware');
const { 
    verifyAccessToken,
    verifyRefreshToken
} = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.get('/:id', [verifyAccessToken], getUserById);
router.post('/login', [checkLogin], logIn);
router.post('/refresh-token', [verifyRefreshToken], refreshToken);
router.delete('/logout', [verifyRefreshToken], logOut);

// export module
module.exports = router;