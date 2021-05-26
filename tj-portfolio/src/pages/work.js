import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Work from "../components/Work";

function Workpage() {
  return (
    <Container fluid>
      <h2 id="work-header">Some of My Work</h2>
      <Work />
    </Container>
  );
}

export default Workpage;
