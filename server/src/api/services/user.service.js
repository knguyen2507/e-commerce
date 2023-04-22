'use strict'

// models
const _User = require('../models/user.model');
// utils
const { getData } = require('../utils');

// get all users
const get_all_users = async () => {
    const users = await _User.find({});
    if (users.length === 0) {
        return {
            code: 500,
            message: "Internal Server Error"
        }
    }
    return {
        code: 200,
        metadata: {
            users: users.map(user => (
                getData({
                    fields: ['_id', 'name', 'email'],
                    object: user
                })
            ))
        }
    }
}

// export module
module.exports = {
    get_all_users
}