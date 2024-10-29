"use client";
import React, { useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";

const ModalMain = (props) => {
  return (
    <Modal
    // data-bs-focus="false"
      show={props.showmodel}
      onHide={props.handleClose}
      centered
    //   enforceFocus={false}
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
};

export default ModalMain;
