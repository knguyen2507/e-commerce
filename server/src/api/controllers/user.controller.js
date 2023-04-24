'use strict'

// services
const { 
    get_all_users,
    login,
    logout
} = require('../services/user.service');

// get all users
const getAllUsers = async (req, res) => {
    const {code, metadata, message} = await get_all_users({});

    return res.status(code).json({
        code, metadata, message
    })
};
// login
const logIn = async (req, res) => {
    const {username, password} = req.body;

    const {code, metadata, message} = await login({us: username, pwd: password});

    if (!metadata) {
        return res.status(code).json({
            code, metadata: metadata, message
        })
    }

    res.cookie('refreshToken', metadata.refreshToken);

    return res.status(code).json({
        code, metadata: {user: metadata.user, accessToken: metadata.accessToken}, message
    })
};
// Log out
const logOut = async (req, res) => {
    const id = req.user_id;
    const { code, message } = await logout({id});

    return res.status(code).json({
        code, message
    })
};

// export module
module.exports = {
    getAllUsers,
    logIn,
    logOut
}