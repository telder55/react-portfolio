import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const WorkCard = ({ details }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{details.name}</Modal.Title>
        </Modal.Header>
        <img src={details.image} />
        <Modal.Body>{details.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            View Github
          </Button>
          <Button variant="primary" onClick={handleClose}>
            View App
          </Button>
        </Modal.Footer>
      </Modal>
      <Card>
        <Card.Img variant="top" onClick={handleShow} src={details.image} />
        <Card.Body>
          <Card.Title>{details.name}</Card.Title>
          <Button href={details.github} variant="primary">
            View Github
          </Button>
          <Button href={details.app} variant="primary">
            View App
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkCard;
