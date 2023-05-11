'use strict'

const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Payment';
const COLLECTION_NAME = 'Payments';

const paymentSchema = new Schema({
    id: {
        type: String,
        maxLength: 100
    },
    idUser: {
        type: String,
        maxLength: 100
    },
    products: [],
    time: {
        type: Date,
        default: Date.now,
        index: {expires: 60*10}
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});

// export module
module.exports = model(DOCUMENT_NAME, paymentSchema);