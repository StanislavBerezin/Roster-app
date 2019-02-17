import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import MainPage from "./containers/mainPage/MainPage";

import DashBoard from "./containers/dashBoard/DashBoard";
import Nav from "./components/nav/Nav";
import AuthManager from "./containers/authManager/AuthManager";
import { connect } from "react-redux";
import "./styles/imports.scss";

class App extends Component {
  render() {
    let dynamicRoutes = null;
    if (this.props.isAuthenticated) {
      dynamicRoutes = (
        <React.Fragment>
          <Route path={"/dashboard"} component={DashBoard} />
        </React.Fragment>
      );
    } else {
      dynamicRoutes = <Redirect to="/" />;
    }

    return (
      <div>
        <Nav />

        <AuthManager />

        <Route exact path="/" component={MainPage} />

        {dynamicRoutes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};

// withRouter is used in this instance so that it actually redirects you home page if trying to access dashboard
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
