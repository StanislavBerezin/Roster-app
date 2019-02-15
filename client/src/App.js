import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import MainPage from "./containers/mainPage/MainPage";
import NavManager from "./containers/navManager/NavManager";
import DashBoard from "./containers/dashBoard/DashBoard";
import Nav from "./components/nav/Nav";
import AuthManager from "./containers/authManager/AuthManager";
import { connect } from "react-redux";
import "./styles/imports.scss";
import LoginModal from "./components/modals/LoginModal";
class App extends Component {
  render() {
    return (
      <div>
        <Nav />

        <AuthManager />

        <Route exact path="/" component={MainPage} />

        {this.props.isAuthenticated ? (
          <Route path="/dashboard" component={DashBoard} />
        ) : (
          <Redirect to="/" />
        )}
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
