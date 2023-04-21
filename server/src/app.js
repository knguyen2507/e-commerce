'use strict'

const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const compression = require('compression');
const { default: helmet } = require('helmet');
const cors = require('cors');
const db = require('./database/init.mongodb');
// routes
const userRouter = require('./api/routes/user.router');
const productRouter = require('./api/routes/product.router');
const categoryRouter = require('./api/routes/category.router');

const app = express();
// init middlewares
app.use(cors());
app.use(compression());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// databases
db;
// init routes
app.get('/', (req, res) => { res.send("<h1>HOME PAGE</h1>") });
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
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

// export module
module.exports = app;