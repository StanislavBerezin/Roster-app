import React, { Component } from "react";
//import styles from "./NavManager.module.scss";
import Nav from "../../components/nav/Nav";
import LoginModal from "../../components/modals/LoginModal";
import RegisterModal from "../../components/modals/RegisterModal";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import Input from "../../components/UI/Input/Input";

import Modal from "../../components/modals/Modal";

import login from "./forms/login";
import register from "./forms/register";

class AuthManager extends Component {
  state = {
    modalName: null,
    loginModal: login,
    registerModal: register
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  componentDidUpdate() {
    if (this.state.modalName !== null) {
      return;
    }
    if (this.props) {
      if (this.props.isLogin) {
        console.log("is log");
        this.setState({ modalName: "loginModal" });
      } else if (this.props.isRegister)
        this.setState({ modalName: "registerModal" });
    }
  }

  inputChangedHandler = (event, controlName, formIdentifer) => {
    const updatedControls = {
      ...this.state[formIdentifer],
      [controlName]: {
        ...this.state[formIdentifer][controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state[formIdentifer][controlName].validation
        ),
        touched: true
      }
    };

    this.setState({ [formIdentifer]: updatedControls });
  };

  render() {
    let formIdentifier = this.state.modalName;
    console.log(this.props);
    const formElementsArray = [];
    for (let key in this.state[formIdentifier]) {
      formElementsArray.push({
        id: key,
        config: this.state[formIdentifier][key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event =>
          this.inputChangedHandler(event, formElement.id, this.state.modalName)
        }
      />
    ));

    return (
      <React.Fragment>
        <button onClick={() => this.props.toggleModal("loginModal")}>
          hey
        </button>
        <Modal form={form} identifer={this.state.modalName} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // so that it becomes a boolean
    isAuthenticated: state.authReducer.token !== null,
    isLogin: state.modalReducer.loginModal,
    isRegister: state.modalReducer.registerModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkIfAuthenticated: () => dispatch(actions.logout),
    toggleModal: payload => dispatch(actions.toggleModal(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthManager);
