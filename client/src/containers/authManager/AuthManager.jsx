import React, { Component } from "react";
//import styles from "./NavManager.module.scss";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import Input from "../../components/UI/Input/Input";

import Modal from "../../components/modals/Modal";

import login from "./forms/login";
import register from "./forms/register";
import validation from "./validations/validation";

class AuthManager extends Component {
  state = {
    loginModal: login,
    registerModal: register
  };

  insideModalToggle = () => {
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

    this.props.authRequest(formData, safeKeeper);
  };
  compareValidityOfForms = valid => {
    return valid === true;
  };

  inputChangedHandler = (event, controlName, formIdentifer) => {
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

    this.setState({ [formIdentifer]: updatedControls });
  };

  render() {
    // to disable SIGN UP or SIGN IN button
    let currentModal = null;
    let arr = [];
    if (this.props.loginModal) currentModal = "loginModal";
    else currentModal = "registerModal";
    for (let each in this.state[currentModal]) {
      arr.push(this.state[currentModal][each].valid);
    }
    let bool = arr.every(this.compareValidityOfForms);

    //converting all elements in the state into an array of object to loop through with map
    //and eventually populate input form
    const formElementsArray = [];
    for (let key in this.state[currentModal]) {
      formElementsArray.push({
        id: key,
        config: this.state[currentModal][key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        error={formElement.config.error}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        label={formElement.config.label}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event =>
          this.inputChangedHandler(event, formElement.id, currentModal)
        }
      />
    ));
    if (this.props.isAuthenticated) return <Redirect to={"/dashboard"} />;
    return (
      <React.Fragment>
        <Modal
          form={form}
          identifer={currentModal}
          insideToggle={this.insideModalToggle}
          submitForm={this.submitForm}
          disabled={bool}
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
    toggleModal: payload => dispatch(actions.toggleModal(payload)),
    authRequest: (payload, whichModal) =>
      dispatch(actions.authRequest(payload, whichModal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthManager);
