import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import searchIcon from '../assets/search.png';

function CustomNavbar() {
  return (
    <Navbar className="navbar-custom-bg py-3" expand="lg">
      <Container>
        <Navbar.Brand href="/home">MakmurSehat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <img src={searchIcon} alt="Cari" className="search-icon-img" />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;