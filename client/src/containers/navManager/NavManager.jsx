import React, { Component } from "react";
import styles from "./NavManager.module.scss";
import Nav from "../../components/nav/Nav";
import LoginModal from "../../components/modals/LoginModal";
import RegisterModal from "../../components/modals/RegisterModal";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

class NavManager extends Component {
  state = {
    loginModal: false,
    registerModal: false
  };

  toggleModal(nameModal, modalBool) {
    this.setState({
      [nameModal]: modalBool
    });
  }

  render() {
    console.log(this.props.isAuthenticated);
    return (
      <React.Fragment>
        {/* should toggle to open */}
        <Nav
          isAuthenticated={this.props.isAuthenticated}
          loginModal={() => this.toggleModal("loginModal", true)}
          registerModal={() => this.toggleModal("registerModal", true)}
        />

        {/* modal itself  */}
        <LoginModal
          visability={this.state.loginModal}
          closeModal={() => this.toggleModal("loginModal", false)}
        />
        <RegisterModal
          visability={this.state.registerModal}
          closeModal={() => this.toggleModal("registerModal", false)}
        />
        <h2>Nav manager</h2>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // so that it becomes a boolean
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIfAuthenticated: () => dispatch(actions.logout)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavManager);
