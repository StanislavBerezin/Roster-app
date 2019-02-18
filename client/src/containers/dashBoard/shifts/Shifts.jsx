import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "./table/Table";
import styles from "./Shifts.module.scss";
import * as actions from "../../../redux/actions/index";
import shiftForm from "./form/shiftForm";
import Input from "../../../components/UI/Input/Input";
import validation from "../../authManager/validations/validation";
class Shifts extends Component {
  state = {
    form: shiftForm
  };
  componentDidMount() {
    this.props.getShifts();
  }
  submitForm = event => {
    event.preventDefault();

    let formData = {};

    for (let elIdentifier in this.state.form) {
      formData[elIdentifier] = this.state.form[elIdentifier].value;
    }

    this.props.applyForShift(formData);
    this.props.getShifts();
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.form,
      [controlName]: {
        ...this.state.form[controlName],
        value: event.target.value,
        valid: validation.checkValidity(
          event.target.value,
          this.state.form[controlName].validation
        ),
        touched: true
      }
    };

    this.setState({ form: updatedControls });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key]
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
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    let shiftsTable = this.props.allShifts.map((e, index) => {
      return (
        <React.Fragment key={index}>
          <Table data={e} />
        </React.Fragment>
      );
    });
    return (
      <div className={styles.Shifts}>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Shift date</th>
              <th>Start time</th>
              <th>Finish time</th>
              <th>Break</th>
            </tr>
            {shiftsTable}
          </tbody>
        </table>
        <div className={styles.form}>
          {form}
          <button className={styles.button_dashboard} onClick={this.submitForm}>
            Create shift
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allShifts: state.orgReducer.shifts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShifts: () => dispatch(actions.getShifts()),
    applyForShift: payload => dispatch(actions.applyForShift(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shifts);
