import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../../components/UI/Input/Input";
// import "./DashBoard.scss";
import form from "./forms/createOrg";
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
    console.log(updatedControls);
    this.setState({ creation: updatedControls });
  };
  submitForm = () => {
    console.log(this.state.creation);
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
      <div className="mainSearchPage">
        {form}
        <button onClick={this.submitForm}>Create</button>
      </div>
    );
  }
}

export default Edit;
