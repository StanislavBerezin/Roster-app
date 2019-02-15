import React, { Component } from "react";
import Modal from "react-awesome-modal";

const LoginModal = ({ visability, closeModal, submitAuth }) => {
  return (
    <Modal
      visible={visability}
      width="400"
      height="300"
      effect="fadeInUp"
      onClickAway={() => closeModal()}
    >
      <div>
        <form onSubmit={submitAuth}>
          <label>Name</label>
          <input type="text" />

          <input type="submit" value="Submit" />
        </form>
        <h1>Title</h1>
        <p>Some Contents</p>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </Modal>
  );
};

export default LoginModal;
