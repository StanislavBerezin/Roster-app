import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/index";

import Modal from "react-awesome-modal";
const CustomModal = ({
  loginModal,
  registerModal,
  toggleModal,
  form,
  identifer,
  insideToggle
}) => {
  return (
    <React.Fragment>
      <Modal
        visible={loginModal || registerModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => toggleModal(identifer)}
      >
        <div>
          <form>{form}</form>

          <button onClick={() => insideToggle()}>
            {loginModal ? <p>Register</p> : <p>Login</p>}
          </button>
          <button>{loginModal ? <p>Sign in</p> : <p>Register</p>}</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    loginModal: state.modalReducer.loginModal,
    registerModal: state.modalReducer.registerModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: payload => dispatch(toggleModal(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomModal);
