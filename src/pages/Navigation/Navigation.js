import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className="body">
             <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#">Technext test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <input
                            // onChange={ handleSearch 
                                type="search"
                                placeholder="Search by Rocket name"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button  variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Navigation;