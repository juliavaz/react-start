import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">React Start</Nav.Link>
            <Nav.Link href="/cards-page">Página de Cards</Nav.Link>
            <Nav.Link href="/hello-world">Hello World</Nav.Link>
            <Nav.Link href="/arrays">Arrays</Nav.Link>
            <Nav.Link href="/objects">Objects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
