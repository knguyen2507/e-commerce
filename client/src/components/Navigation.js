import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Navigation () {
    const tag_p = {
        margin: "10px"
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home" ><p style={tag_p} className="font-weight-bold fs-4">Home</p></Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Button variant="light" size="sm">Search</Button>
                <Nav className="justify-content-end">
                    <Nav.Link href="#features"><p style={tag_p} className="font-weight-bold fs-4">Sign In</p></Nav.Link>
                    <Nav.Link href="#pricing"><p style={tag_p} className="font-weight-bold fs-4">Sign Up</p></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;