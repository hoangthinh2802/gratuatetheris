import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          
            <Navbar.Brand href="#home">
              <img
                src="logo.png"
                width="30"
                height="30"
            
                alt=""
              />
            </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home</Nav.Link>
              <Nav.Link href="/login">
                <i class="fas fa-battery-half"></i> About Us
              </Nav.Link>
              <Nav.Link href="/contact">
                <i class="fas fa-address-card"></i> Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
