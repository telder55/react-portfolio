import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <Navbar bg="" expand="lg">
      <Navbar.Brand href="/react-portfolio">TJ Elder</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavLink className="nav-link" to="/work">
            My Work
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
