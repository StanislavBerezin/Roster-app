import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../../components/UI/Input/Input";
import styles from "../DashBoard.module.scss";
import form from "./forms/createOrg";
import * as actions from "../../../redux/actions/index";
class Edit extends Component {
  state = {
    creation: form
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.creation,
      [controlName]: {
        ...this.state.creation[controlName],
        value: event.target.value
      }
    };

    this.setState({ creation: updatedControls });
  };
  submitForm = () => {
    let formData = {};

    for (let elIdentifier in this.state.creation) {
      formData[elIdentifier] = this.state.creation[elIdentifier].value;
    }

    this.props.createOrg(formData);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.creation) {
      formElementsArray.push({
        id: key,
        config: this.state.creation[key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        label={formElement.config.label}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <div className={styles.editForm}>
        {form}
        <button className={styles.button_dashboard} onClick={this.submitForm}>
          Create
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOrg: state.orgReducer.orgID !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrg: payload => dispatch(actions.createAndJoin(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
