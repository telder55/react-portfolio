import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WorkModal = ({ details, showModal }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
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
    </>
  );
};

export default WorkModal;
