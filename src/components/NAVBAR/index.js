import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navmenu({ isAuthenticated }) {
    useEffect(() => {
        // console.log("is auth", isAuthenticated)

    })
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Crowdfunding</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={"/storyform"}>Cuéntanos tu historia</Link></Nav.Link>
                        {!isAuthenticated && (
                            <Nav.Link><Link to={"/login"}>Ingresar</Link></Nav.Link>
                        )}
                        {isAuthenticated && (
                            <Nav.Link><Link to={"/logout"}>Cerrar Sesión</Link></Nav.Link>
                        )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navmenu;