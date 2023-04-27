import Navigation from "../components/Navigation.js";
import Title from "../components/Title.js";
import Footer from "../components/Footer.js";
import Container from 'react-bootstrap/Container';
import { LogOut } from "../services/userAPI.js";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const title = "Logout";

function Logout (props) {
    document.title = title.toUpperCase();

    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        const logout = async () => {
            const res = await LogOut();
            if (res.data.code < 400) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('idUser');
                localStorage.removeItem('nameUser');
                Cookies.remove('refreshToken')
            }
            setMsg(res.data.message);
        }
        logout();
    }, []) 

    return (
        <>
            <Navigation />
            <Title title={title} />
            <Container>
                {msg}
            </Container>
            <Footer brands={props.brands} categories={props.categories} />
        </>
    )
}

export default Logout;