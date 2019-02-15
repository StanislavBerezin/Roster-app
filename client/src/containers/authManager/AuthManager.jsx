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
    loginModal: login,
    registerModal: register
  };

  insideModalToggle = () => {
    this.props.toggleModal("registerModal");
    this.props.toggleModal("loginModal");
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
        <button onClick={() => this.props.toggleModal("loginModal")}>
          hey
        </button>
        <Modal
          form={form}
          identifer={formIdentifier}
          insideToggle={this.insideModalToggle}
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
