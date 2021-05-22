import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Hero from "../components/Hero";
import Work from "../components/Work";

function Home() {
  return (
    <Container fluid>
      <Hero />
      <Work />
    </Container>
  );
}

export default Home;
