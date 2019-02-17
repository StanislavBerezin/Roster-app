import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/index";
import style from "./style.module.scss";
import Modal from "react-awesome-modal";
import Spinner from "../UI/Spinner/Spinner";

const CustomModal = ({
  loginModal,
  registerModal,
  toggleModal,
  form,
  identifer,
  insideToggle,
  submitForm,
  disabled,
  isAuth
}) => {
  if (isAuth) return null;
  return (
    <React.Fragment>
      <Modal
        visible={loginModal || registerModal}
        effect="fadeInUp"
        onClickAway={() => toggleModal(identifer)}
      >
        <div className={style.form}>
          <form>
            {form}
            <Spinner />
          </form>
          <div className={style.buttons}>
            <button className={style.button} onClick={() => insideToggle()}>
              {loginModal ? <span>Register</span> : <span>Sign in</span>}
            </button>
            <button
              className={style.button}
              disabled={!disabled}
              onClick={submitForm}
            >
              {loginModal ? <span>Sign in</span> : <span>Register</span>}
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.token !== null,
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
