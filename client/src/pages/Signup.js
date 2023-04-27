import Navigation from "../components/Navigation.js";
import Title from "../components/Title.js";
import Footer from "../components/Footer.js";
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const title = "Register Page";

function Signin (props) {
    document.title = title.toUpperCase();

    const registerForm = {
        width: "400px",
        height: "400px",
        margin: "50px auto",
        fontSize: "15px",
        marginBottom: "50px",
        background: "#f7f7f7",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
        padding: "30px",
    };

    const registerInput = {
        marginBottom: "25px"
    };

    const registerBtn = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "40%"
    }

    const registerLink = {
        textAlght: "right",
        color: "blue"
    };

    return (
        <>
            <Navigation />
            <Title title={title} />
            <Form style={registerForm}>      
                <Form.Group style={registerInput}>
                    <Form.Control type="text" class="form-control" placeholder="Name" name="Name" required="required" />
                </Form.Group>
                <Form.Group style={registerInput}>
                    <Form.Control type="text" class="form-control" placeholder="Email" name="Email" required="required" />
                </Form.Group>
                <Form.Group style={registerInput}>
                    <Form.Control type="text" class="form-control" placeholder="Username" name="Username" required="required" />
                </Form.Group>
                <Form.Group style={registerInput}>
                    <Form.Control type="password" class="form-control" placeholder="Password" name="Password" required="required" />
                </Form.Group>
                <Form.Group style={registerLink}>
                    <Nav.Link href="/login"><p>I already have an account</p></Nav.Link>
                </Form.Group>
                <Form.Group style={registerBtn}>
                    <Button type="submit" class="btn btn-primary btn-block">Register</Button>
                </Form.Group> 
            </Form>     
            <Footer brands={props.brands} categories={props.categories} />
        </>
    )
}

export default Signin;