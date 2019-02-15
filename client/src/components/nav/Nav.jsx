import React from "react";
import classess from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/actions/index";

const Nav = ({ isAuthenticated, openModal }) => {
  let navigationAuth = null;

  if (!isAuthenticated) {
    navigationAuth = (
      <React.Fragment>
        <button onClick={() => openModal("loginModal")}> Login</button>

        <button onClick={() => openModal("registerModal")}> Register</button>
      </React.Fragment>
    );
  } else {
    navigationAuth = (
      <React.Fragment>
        <Link to={"/dashboard"}> Dashboard</Link>
        <button> logout</button>
      </React.Fragment>
    );
  }
  return (
    <div>
      <div className={classess.Check}>
        <Link to={"/"}>Home</Link>
        {navigationAuth}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    isLogin: state.modalReducer.loginModal,
    isRegister: state.modalReducer.registerModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: payload => dispatch(toggleModal(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
