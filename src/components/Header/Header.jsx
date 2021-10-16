import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from '../../static/logo.png'



const Header = () =>
{


    return <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">      
                <img src= {logo}  width="30" height="30"
                className="d-inline-block align-top" alt="Logo"
                />CRIN
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/coins">Coins</Nav.Link>
                  <Nav.Link href="/coinsDetail">TOP 100</Nav.Link>
                  <Nav.Link href="/trending">Trending</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
    
    
 
}

export default Header;