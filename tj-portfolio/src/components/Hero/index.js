import React from "react";
import Button from "react-bootstrap/Button";
import "./hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-text">
        <h1>TJ Elder - Web Developer</h1>
        <Button id="work-button" variant="outline-dark">
          View My Work
        </Button>
      </div>
    </div>
  );
};

export default Hero;
