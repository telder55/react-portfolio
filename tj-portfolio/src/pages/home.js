import React from "react";
import TopBar from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Hero from "../components/Hero";

function Home() {
  return (
    <Container fluid>
      <Hero />
    </Container>
  );
}

export default Home;
