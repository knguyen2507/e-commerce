import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import Title from "../components/Title.js";
import { useState, useEffect } from "react";
import { GetAllProducts } from '../services/productAPI.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

const title = "HOME";

function Home () {
    const itemImage = {
        width: "300px", 
        height: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginBottom: "25px"
    };

    const itemInfo = {
        textAlign: "center",
        color: "black",
        textTransform: "uppercase"
    };

    const [products, getProducts] = useState([]);
    
    useEffect(() => {
        const getAllProducts = async () => {
            const products = await GetAllProducts();
            getProducts(products);
        }
        getAllProducts();
    }, [])

    return (
        <>
            <Navigation />
            <Title title={title} />
            <Container>
                <Row md={3}>
                {products.map(product => (
                    <Col style={{marginTop: "25px", marginBottom: "25px"}}>
                        <div style={itemImage}>
                            <a href="#">
                                <img width="300" height="300" src={'images/' + product.idCategory + '/' + product.id + '.jpg'}></img>
                            </a>
                        </div>
                        <div style={itemInfo}>
                            <p>{product.name}</p>
                        </div>
                    </Col>
                ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;