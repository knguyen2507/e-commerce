import Navigation from "../components/Navigation.js";
import Footer from "../components/Footer.js";
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

const title = "Product";

function Product (props) {
    document.title = title.toUpperCase();

    const itemImage = {
        width: "300px", 
        height: "auto",
        backgroundColor: "white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginBottom: "25px"
    };

    function CheckAvaiable (properties) {
        if (properties.qty > 0) return true
        return <p style={{color:"red", fontWeight: "bold"}}>Out Of Stock</p>
    }

    return (
        <>
            <Navigation />
            <Container>
                <Row style={{marginTop: "25px", marginBottom: "25px"}}>
                    <Col sm={4}>
                        <div style={itemImage}>
                            <img width="300" height="300" src={'../images/' + props.product.idCategory + '/' + props.product.id + '.jpg'}></img>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div style={{textAlign: "left"}}>
                            <p><span style={{fontWeight: "bold"}}>PRODUCT NAME: </span>{props.product.name}</p>
                            <p><span style={{fontWeight: "bold"}}>CATEGORY: </span>{props.product.category}</p>
                            <p><span style={{fontWeight: "bold"}}>BRAND: </span>{props.product.brand}</p>
                            <p><span style={{fontWeight: "bold"}}>PRICE: </span>{props.product.price}</p>
                            <CheckAvaiable qty={props.product.qty} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer brands={props.brands} categories={props.categories} />
        </>
    )
}

export default Product;