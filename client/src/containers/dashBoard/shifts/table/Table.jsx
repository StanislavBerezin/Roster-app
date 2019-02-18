import React from "react";
import { connect } from "react-redux";
import styles from "../Shifts.module.scss";
import * as actions from "../../../../redux/actions/index";
const Table = props => {
  let shiftDate = props.data.start.slice(0, 10);
  let shiftStart = props.data.start.slice(11, 18);
  let shiftFinish = props.data.finish.slice(11, 18);
  let id = props.data.id;
  return (
    <React.Fragment>
      <tr>
        <td>{props.data.name}</td>
        <td>{shiftDate}</td>
        <td>{shiftStart}</td>
        <td>{shiftFinish}</td>
        <td>{props.data.breakLength} Mins</td>

        <td>
          <button className={styles.button_dashboard}>Edit</button>
        </td>
        <td>
          <button
            className={styles.button_danger}
            onClick={() => props.deleteShift(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteShift: payload => dispatch(actions.deleteShift(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
