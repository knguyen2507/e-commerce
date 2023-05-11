'use strict'

const express = require('express');
// controllers
const { 
    getAllUsers,
    getUserById,
    logIn,
    logOut,
    signUpGuest,
    createUserByAdmin,
    deleteUser 
} = require('../controllers/user.controller');
const {
    refreshToken,
    checkAccessRoleAdmin
} =require('../controllers/jwt.controller');
const {
    getAllPayments,
    getAllHistoryPayments,
    paymentCart,
    cancelPayment,
    cancelPaymentByAdmin,
    confirmPayment
} = require('../controllers/payment.controller');
// middlewares
const {
    checkLogin,
    checkRegister
} = require('../middlewares/user.middleware');
const { 
    verifyAccessToken,
    verifyRefreshToken,
    authPage
} = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/get-all-users', [verifyAccessToken, authPage(['Admin'])], getAllUsers);
router.post('/login', [checkLogin], logIn);
router.post('/refresh-token', [verifyRefreshToken], refreshToken);
router.delete('/logout', [verifyRefreshToken], logOut);
router.post('/register', [checkRegister], signUpGuest);
router.post('/check-access-admin-page', [verifyAccessToken], checkAccessRoleAdmin);
router.post(
    '/admin/create-user', 
    [
        checkRegister,
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    createUserByAdmin
);
router.delete(
    '/admin/delete-user/:id', 
    [
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    deleteUser
);
router.get(
    '/admin/payment/get-all-payments', 
    [
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    getAllPayments
);
router.get(
    '/admin/payment/get-all-history-payments', 
    [
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    getAllHistoryPayments
);
router.delete(
    '/admin/payment/:id/cancel-payment', 
    [
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    cancelPaymentByAdmin
);
router.post(
    '/admin/payment/:id/confirm-payment', 
    [
        verifyAccessToken,
        authPage(['Admin'])
    ], 
    confirmPayment
);
router.post(
    '/cart/:id/payment', 
    [
        verifyAccessToken
    ], 
    paymentCart
);
router.delete(
    '/cart/:id/payment/:idPayment/cancel-payment', 
    [
        verifyAccessToken
    ], 
    cancelPayment
);
router.get('/:id', [verifyAccessToken], getUserById);

// export module
module.exports = router;