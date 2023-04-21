'use strict'

// models
const _Category = require('../models/category.model');

// get all categories
const get_all_categories = async () => {
    const categories = await _Category.find({});
    if (!categories) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    return {
        code: 200,
        metadata: {
            categories
        }
    }
};

// export module
module.exports = {
    get_all_categories
};