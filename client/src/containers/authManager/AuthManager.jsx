import React, { Component } from "react";
//import styles from "./NavManager.module.scss";

import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import Input from "../../components/UI/Input/Input";

import Modal from "../../components/modals/Modal";

import login from "./forms/login";
import register from "./forms/register";
import validation from "./validations/validation";

class AuthManager extends Component {
  state = {
    passedValidation: false,
    loginModal: login,
    registerModal: register
  };

  insideModalToggle = () => {
    this.setState({ passedValidation: false });
    this.props.toggleModal("registerModal");
    this.props.toggleModal("loginModal");
  };

  submitForm = event => {
    event.preventDefault();
    let safeKeeper = null;
    let formData = {};
    if (this.props.loginModal) safeKeeper = "loginModal";
    else if (this.props.registerModal) safeKeeper = "registerModal";

    for (let elIdentifier in this.state[safeKeeper]) {
      formData[elIdentifier] = this.state[safeKeeper][elIdentifier].value;
    }

    console.log(formData);
  };
  compareValidityOfForms = valid => {
    return valid === true;
  };
  inputChangedHandler = (event, controlName, formIdentifer) => {
    let arr = [];
    const updatedControls = {
      ...this.state[formIdentifer],
      [controlName]: {
        ...this.state[formIdentifer][controlName],
        value: event.target.value,
        valid: validation.checkValidity(
          event.target.value,
          this.state[formIdentifer][controlName].validation
        ),
        touched: true
      }
    };
    for (let each in this.state[formIdentifer]) {
      arr.push(this.state[formIdentifer][each].valid);
    }
    let bool = arr.every(this.compareValidityOfForms);
    console.log(bool);
    this.setState({ [formIdentifer]: updatedControls, passedValidation: bool });
  };

  render() {
    let formIdentifier = Object.keys(this.props).find(
      key => this.props[key] === true
    );

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
        label={formElement.config.label}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event =>
          this.inputChangedHandler(event, formElement.id, formIdentifier)
        }
      />
    ));

    return (
      <React.Fragment>
        <Modal
          form={form}
          identifer={formIdentifier}
          insideToggle={this.insideModalToggle}
          submitForm={this.submitForm}
          disabled={this.state.passedValidation}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // so that it becomes a boolean
    isAuthenticated: state.authReducer.token !== null,
    loginModal: state.modalReducer.loginModal,
    registerModal: state.modalReducer.registerModal
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
