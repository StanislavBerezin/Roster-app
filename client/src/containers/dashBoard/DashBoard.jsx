import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
import Shifts from "./shifts/Shifts";
import Edit from "./edit/Edit";
import styles from "./DashBoard.module.scss";
import SelectOrg from "./selectOrg/SelectOrg";
import * as actions from "../../redux/actions";
class DashBoard extends Component {
  Redirect = () => {
    this.props.leaveOrg();
    this.props.history.push("/dashboard");
  };

  render() {
    let dynamicDisplay = null;
    if (this.props.isOrg) {
      dynamicDisplay = (
        <div className={styles.links}>
          <Link
            className={styles.button_dashboard}
            to={`${this.props.match.url}/shifts/${this.props.orgID}`}
          >
            Shifts
          </Link>
          <Link
            className={styles.button_dashboard}
            to={`${this.props.match.url}/edit/${this.props.orgID}`}
          >
            Edit
          </Link>
          <button
            className={styles.button_dashboard}
            onClick={() => this.Redirect()}
          >
            Leave
          </button>
          <Route path={`/dashboard/shifts/:id`} component={Shifts} />
          <Route exact path={`/organisation/edit/:id`} component={Edit} />
        </div>
      );
    }

    // one the strangest parts in the code :)
    let hack = this.props.location.pathname.toString().length;
    let smartSelectOrg = null;
    if (hack <= 10) {
      smartSelectOrg = <SelectOrg />;
    }

    return (
      <div className={styles.mainDash}>
        <h1>DashBoard</h1>
        {dynamicDisplay}
        {smartSelectOrg}
        <Route path={`/dashboard/edit/:id`} component={Edit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // so that it becomes a boolean
    isAuthenticated: state.authReducer.token !== null,
    isOrg: state.orgReducer.orgID !== null,
    orgID: state.orgReducer.orgID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    leaveOrg: () => dispatch(actions.requestLeaveOrg())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
