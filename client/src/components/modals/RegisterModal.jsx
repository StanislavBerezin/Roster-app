import React, { Component } from "react";
import Modal from "react-awesome-modal";

const RegisterModal = ({ visability, closeModal }) => {
  return (
    <Modal
      visible={visability}
      width="400"
      height="300"
      effect="fadeInUp"
      onClickAway={() => closeModal()}
    >
      <div>
        <h1>Title</h1>
        <p>Some Contents</p>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </Modal>
  );
};

export default RegisterModal;
