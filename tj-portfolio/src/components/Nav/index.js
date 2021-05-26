import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { NavLink } from "react-router-dom";

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
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
          <NavDropdown
            href="/work"
            title="My Work"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="/work#dashboard">
              SEO Dashboard
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/work">
              Employee Directory React App
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/work">
              BeerNuts Full Stack App
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/work">Fitness Tracker</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/work">Readme Generator</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/work">Weather Dashboard</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
