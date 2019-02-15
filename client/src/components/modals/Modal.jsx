import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/index";

import Modal from "react-awesome-modal";
const CustomModal = ({ isLogin, isRegister, toggleModal, form, identifer }) => {
  let defineModal = null;

  if (isLogin) {
    defineModal = isLogin;
  } else {
    defineModal = isRegister;
  }
  return (
    <React.Fragment>
      <Modal
        visible={defineModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={() => toggleModal(identifer)}
      >
        <div>
          <form>{form}</form>
        </div>
      </Modal>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isLogin: state.modalReducer.loginModal,
    isRegister: state.modalReducer.registerModal,
    modalName: state.modalReducer.modalName
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
