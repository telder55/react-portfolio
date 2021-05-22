import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const WorkCard = ({ details }) => {
  console.log(details.app);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={details.image} />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
        <Button href={details.github} variant="primary">
          View Github
        </Button>
        <Button href={details.app} variant="primary">
          View App
        </Button>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
