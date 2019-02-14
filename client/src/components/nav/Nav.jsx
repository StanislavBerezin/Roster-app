import React from "react";
import classess from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = ({ loginModal, registerModal, isAuthenticated }) => {
  let navigationAuth = null;

  if (!isAuthenticated) {
    navigationAuth = (
      <React.Fragment>
        <button onClick={() => loginModal()}> Login</button>

        <button onClick={() => registerModal()}> Register</button>
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

export default Nav;
