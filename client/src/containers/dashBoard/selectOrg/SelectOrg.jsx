import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
// import "./DashBoard.scss";
import Edit from "../edit/Edit";
import * as actions from "../../../redux/actions/index";
import styles from "../DashBoard.module.scss";
class SelectOrg extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    if (this.props.isOrg) return null;

    // console.log(this.state.creation.name.value);
    let dynamicDisplay = this.props.allOrgs.map(e => {
      return (
        <div className={styles.eachOrg} key={e.id}>
          <p key={e.name}>{e.name}</p>
          <Link
            key={e.id}
            className={styles.button_dashboard}
            to={`/dashboard/edit/${e.id}`}
          >
            Edit
          </Link>
          <button className={styles.button_dashboard}>Join</button>
        </div>
      );
    });

    return (
      <div className={styles.selectOrg}>
        <h2>
          You need to select organisation <br />
        </h2>
        {dynamicDisplay}
        <h2>Or create</h2>
        <Edit />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOrg: state.orgReducer.orgID !== null,
    allOrgs: state.orgReducer.organisations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => dispatch(actions.requestAllOrg())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectOrg);
