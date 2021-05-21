import React from "react";
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">TJ Elder</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <NavDropdown title="My Work" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">SEO Dashboard</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">
              Employee Directory React App
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              BeerNuts Full Stack App
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
