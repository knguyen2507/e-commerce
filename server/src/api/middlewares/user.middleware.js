'use strict'

const createError = require('http-errors');

const checkLogin = async (req, res, next) => {
    if (req.body.username === "" || req.body.password === "") {
        return next(createError.BadRequest('Please Fill all fields'));
    }

    next();
}

// export module
module.exports = {
    checkLogin
}