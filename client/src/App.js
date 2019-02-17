import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import MainPage from "./containers/mainPage/MainPage";

import DashBoard from "./containers/dashBoard/DashBoard";
import Nav from "./components/nav/Nav";
import AuthManager from "./containers/authManager/AuthManager";
import Footer from "./components/footer/Footer";
import Spinner from "./components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "./redux/actions/index";
import "./styles/imports.scss";

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
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
        <div className="mainScreen">
          <Route exact path="/" component={MainPage} />
          <Spinner />
          {dynamicRoutes}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(actions.checkIfAuth())
  };
};
// withRouter is used in this instance so that it actually redirects you home page if trying to access dashboard
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
