import axios from "axios";
import Cookies from 'js-cookie';

const host = process.env.REACT_APP_HOST;

const GetUserById = async ({id}) => {
    const path = `/user/${id}`;
    const url = host + path;
    const token = localStorage.getItem('accessToken');

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const res = response.data;
    
        return res.metadata;
    } catch (error) {
        return error.response.data;
    }
};

const Login = async (username, password) => {
    const path = '/user/login';
    const url = host + path;

    const payload = {username: username, password: password};

    try {
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const res = response.data;
    
        return res.metadata;
    } catch (error) {
        return error.response.data;
    }
    
};

const LogOut = async () => {
    const refreshToken = Cookies.get('refreshToken');
    const path = '/user/logout';
    const url = host + path;

    const payload = {refreshToken: refreshToken};
    const response = await axios.delete(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload
    });

    return response;
};

const RefreshToken = async () => {
    const refreshToken = Cookies.get('refreshToken');
    const path = '/user/refresh-token';
    const url = host + path;

    const payload = {refreshToken: refreshToken};
    const response = await axios.post(url, payload, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const res = response.data;
    
    return res.accessToken;
}

export {
    GetUserById,
    Login,
    LogOut,
    RefreshToken
}