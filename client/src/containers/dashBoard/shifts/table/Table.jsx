import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../Shifts.module.scss";
import * as actions from "../../../../redux/actions/index";

// the entire section could be refactored

class Table extends Component {
  state = {
    editToggle: false,
    updatedForm: {
      start: "",
      finish: "",
      breakLength: ""
    }
  };
  editHandler = (id, isSend) => {
    const isEdit = this.state.editToggle;
    this.setState({ editToggle: !isEdit });
    let sendForm = this.state.updatedForm;
    sendForm.id = id;
    if (isSend === "send") {
      this.props.updateShift(sendForm);
    }
  };

  handleInputChange = event => {
    let updatedForm = {
      ...this.state.updatedForm,
      [event.target.name]: event.target.value
    };
    console.log(updatedForm);
    this.setState({ updatedForm: updatedForm });
  };

  render() {
    let shiftDate = this.props.data.start.slice(0, 10);
    let shiftStart = this.props.data.start.slice(11, 18);
    let shiftFinish = this.props.data.finish.slice(11, 18);
    let id = this.props.data.id;
    let isEdit = this.state.editToggle;

    let buttons = null;
    if (isEdit) {
      buttons = (
        <React.Fragment>
          <button
            className={styles.button_dashboard}
            onClick={() => this.editHandler(id)}
          >
            Cancel
          </button>
          <button
            className={styles.button_dashboard}
            onClick={() => this.editHandler(id, "send")}
          >
            Save
          </button>
        </React.Fragment>
      );
    } else {
      buttons = (
        <React.Fragment>
          <button
            className={styles.button_dashboard}
            onClick={() => this.editHandler(id)}
          >
            Edit
          </button>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <tr>
          <td>Name</td>
          <td>{shiftDate}</td>
          <td>
            {isEdit ? (
              <input
                name="start"
                type="datetime-local"
                className={styles.input}
                placeholder="Start"
                value={this.state.updatedForm.start}
                onChange={this.handleInputChange}
              />
            ) : (
              shiftStart
            )}
          </td>
          <td>
            {isEdit ? (
              <input
                name="finish"
                type="datetime-local"
                className={styles.input}
                placeholder="Finish"
                value={this.state.updatedForm.finish}
                onChange={this.handleInputChange}
              />
            ) : (
              shiftFinish
            )}
          </td>
          <td>
            {isEdit ? (
              <input
                name="breakLength"
                type="text"
                className={styles.input}
                placeholder="Break"
                value={this.state.updatedForm.breakLength}
                onChange={this.handleInputChange}
              />
            ) : (
              this.props.data.breakLength
            )}
          </td>

          <td>{buttons}</td>
          <td>
            <button
              className={styles.button_danger}
              onClick={() => this.props.deleteShift(id)}
            >
              Remove
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteShift: payload => dispatch(actions.deleteShift(payload)),
    updateShift: payload => dispatch(actions.updateShift(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
