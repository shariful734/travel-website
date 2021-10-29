import './Header.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <NavbarToggle />
                        <Nav className="me-auto">
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/home">Home</NavLink>
                            <NavLink className="link" to="/features">Features</NavLink>
                            <NavLink className="link" to="/pricing">Pricing</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </nav>

        </div>
    );
};

export default Header;