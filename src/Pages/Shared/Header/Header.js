import './Header.css';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Globe Plus</Navbar.Brand>
                    <Navbar.Toggle />
                    <NavbarCollapse className="justify-content-end">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <span className="text-white">{user?.displayName}</span>
                        {user?.email ?
                            < Button onClick={logout} variant="danger">LogOut</Button> :
                            <NavLink className="link" to="/LogIn">LogIn</NavLink>
                        }


                    </NavbarCollapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;