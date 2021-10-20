import { Column } from "ag-grid-community";
import React from "react";
import { Container, Navbar, Nav, NavDropdown, Alert, Row } from "react-bootstrap";
import logo from '../../static/logo.png'
import CoinsShortData from "./CoinsShortData";



const Header = () =>
{

    return <span><Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
              <Navbar.Brand href="/">      
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
                  <Nav.Link href="/Exchanges">Exchanges</Nav.Link>
                  <Nav.Link href="/news">News</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <CoinsShortData />
        </span>
    
    
 
}

export default Header;