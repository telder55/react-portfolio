import React from "react";
import { Col, Row, Container } from "../components/Grid";
import TopBar from "../components/Nav";
import headshot from "../assets/images/TJ_Elder_Headshot.jpeg";

function Contact() {
  return (
    <Container fluid>
      <div id="contact">
        <h2>Get in Touch</h2>
        <div className="contact-card">
          <img src={headshot} alt="TJ Elder, Full Stack Developer" />
          <div id="contact-info-list">
            <ul>
              <li>TJ Elder</li>
              <li>
                <a href="mailto: telder55@gmail.com">telder55@gmail.com</a>
              </li>
              <li>
                <a href="tel: 203-313-3331">203-313-3331</a>
              </li>
              <li>
                <a href="https://github.com/telder55" target="blank">
                  github.com/telder55
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tjelder5/" target="blank">
                  linkedin.com/in/tjelder5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
