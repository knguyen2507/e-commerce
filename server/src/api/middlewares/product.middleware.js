'use strict'

const createError = require('http-errors');

const checkSearchProduct = async (req, res, next) => {
    if (req.body.key === null) {
        return next(createError.BadRequest('Search: NULL values'));
    }

    next();
};

// export module
module.exports = {
    checkSearchProduct
}