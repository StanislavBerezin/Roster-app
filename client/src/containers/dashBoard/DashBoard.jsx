import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
import Shifts from "./shifts/Shifts";
import Edit from "./edit/Edit";
import "./DashBoard.scss";
import SelectOrg from "./selectOrg/SelectOrg";
class DashBoard extends Component {
  state = {
    orgs: [
      { name: "Bob Tavern", rate: "30%", id: 12 },
      { name: "Jos Qwerty", rate: "50%", id: 33 }
    ]
  };

  render() {
    console.log(this.props.isOrg);

    let dynamicDisplay = null;
    if (this.props.isOrg) {
      dynamicDisplay = (
        <React.Fragment>
          <Link to={`${this.props.match.url}/shifts/${this.state.orgs[0].id}`}>
            Shifts
          </Link>
          <Link to={`${this.props.match.url}/edit/${this.state.orgs[0].id}`}>
            Edit
          </Link>
          <Route path={`/dashboard/shifts/:id`} component={Shifts} />
          <Route exact path={`/organisation/edit/:id`} component={Edit} />
        </React.Fragment>
      );
    }
    let hack = this.props.location.pathname.toString().length;
    let smartSelectOrg = null;
    if (hack <= 10) {
      smartSelectOrg = <SelectOrg />;
    }
    console.log(hack);
    return (
      <div className="mainSearchPage">
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
    isOrg: state.orgReducer.orgID !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
