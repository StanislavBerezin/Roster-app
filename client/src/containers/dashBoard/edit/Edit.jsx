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
  submitForm = identifer => {
    let formData = {};

    for (let elIdentifier in this.state.creation) {
      formData[elIdentifier] = this.state.creation[elIdentifier].value;
    }
    if (identifer === "edit") {
      formData.id = this.props.orgID;
      this.props.editOrg(formData);
    } else if (identifer === "create") this.props.createOrg(formData);
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
    let welcomeMessage = null;
    console.log(this.props);
    if (this.props.isOrg || this.props.match) {
      welcomeMessage = (
        <React.Fragment>
          <h2>{this.props.name}</h2>
          <p>Hourly rate: {this.props.hourlyRate}</p>
          <p> Edit below</p>
          {form}
          <button
            className={styles.button_dashboard}
            onClick={() => this.submitForm("edit")}
          >
            Edit
          </button>
        </React.Fragment>
      );
    } else {
      welcomeMessage = (
        <React.Fragment>
          <h2>Or create and join</h2>
          {form}
          <button
            className={styles.button_dashboard}
            onClick={() => this.submitForm("create")}
          >
            Create
          </button>
        </React.Fragment>
      );
    }
    return <div className={styles.editForm}>{welcomeMessage}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isOrg: state.orgReducer.orgID !== null,
    orgID: state.orgReducer.orgID,
    name: state.orgReducer.name,
    hourlyRate: state.orgReducer.hourlyRate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrg: payload => dispatch(actions.createAndJoin(payload)),
    editOrg: payload => dispatch(actions.requestEditOrg(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
