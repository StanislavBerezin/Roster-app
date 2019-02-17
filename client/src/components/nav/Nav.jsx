import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

const Nav = ({ isAuthenticated, openModal, logOut }) => {
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
        <button onClick={() => logOut()}> logout</button>
      </React.Fragment>
    );
  }
  return (
    <div>
      <div className={styles.nav}>
        <Link to={"/"}>Home</Link>
        {navigationAuth}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: payload => dispatch(actions.toggleModal(payload)),
    logOut: () => dispatch(actions.logOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
