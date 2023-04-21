'use strict'

// services
const { get_all_users } = require('../services/user.service');

// get all users
const getAllUsers = async (req, res) => {
    const {code, metadata, message} = await get_all_users({});

    return res.status(code).json({
        code, metadata, message
    })
}

// export module
module.exports = {
    getAllUsers
}