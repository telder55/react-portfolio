import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const TopBar = () => {
  return (
    <Navbar bg="" expand="lg">
      <Navbar.Brand href="/">TJ Elder</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
