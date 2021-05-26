import React from "react";
import Button from "react-bootstrap/Button";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-text">
        <h1>TJ Elder - Web Developer</h1>
        <Link to="/work">
          {" "}
          <Button id="work-button" variant="outline-dark">
            View My Work
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
