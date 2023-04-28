import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBFooter } from 'mdb-react-ui-kit';
import { useState } from "react";

const title = "Admin Page";

function Admin () {
    document.title = title.toUpperCase();

    const [key, setKey] = useState('');

    function searchProducts() {
        if (key !== '') {
            let path = `/product/search?k=`+key; 
            window.location.href = path;
        }
    };

    const tag_p = {
        margin: "10px"
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link><p style={tag_p} className="font-weight-bold fs-4">KHOI NGUYEN STORE</p></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            style={{marginTop:"2px"}}
                            value={key}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={e => setKey(e.target.value)}
                        />
                        <Button variant="light" size="sm" onClick={searchProducts}>SEARCH</Button>
                    </Form>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/"><p style={tag_p} className="font-weight-bold fs-4">HOME</p></Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/logout"><p style={tag_p} className="font-weight-bold fs-4">SIGN OUT</p></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="vh-100 d-flex flex-column" style={{marginLeft: "0", marginRight: "0"}}>
                <Row className="h-100">
                    <Col xs={6} md={4} style={{backgroundColor: "black", color: "white"}}>
                        <p>Left</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <p>Right</p>
                    </Col>
                </Row>
            </Container>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright
                </div>
            </MDBFooter>
        </>
    )
}

export default Admin;