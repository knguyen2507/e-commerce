const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');

const app = express();
// init middlewares
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
// routes

// handling error
app.use((req, res, next) => {
    next(createError.NotFound('This route does not exist!'));
});
app.use((err, req, res, next) => {
    res.json({
        status: err.status || 500,
        message: err.message
    })
})

module.exports = app;