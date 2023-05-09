import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const title = "Cart";

function Cart () {
    const {id} = useParams();

    return (
        <>
            <Navigation />
            <Container>
                
            </Container>
            <Footer />
        </>
    )
}

export default Cart;