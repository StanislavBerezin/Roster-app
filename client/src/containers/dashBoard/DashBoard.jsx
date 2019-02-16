import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
import Shifts from "./shifts/Shifts";
import Edit from "./edit/Edit";
import "./DashBoard.scss";

class DashBoard extends Component {
  state = {
    orgs: [
      { name: "Bob", rate: "30%", id: 12 },
      { name: "Jos", rate: "50%", id: 33 }
    ]
  };

  render() {
    console.log(this.props.isOrg);
    let dynamicDisplay = null;
    if (this.props.isOrg) {
      dynamicDisplay = (
        <React.Fragment>
          <Link to={`${this.props.match.url}/shifts/:id`}>Shifts</Link>
          <Link to={`${this.props.match.url}/edit/:id`}>Edit</Link>

          <Route path={`${this.props.match.url}/shifts/2`} component={Shifts} />
          <Route path={`${this.props.match.url}/edit/2`} component={Edit} />
        </React.Fragment>
      );
    } else {
      let orgs = this.state.orgs.map(e => {
        return (
          <React.Fragment key={e.id}>
            <p key={e.name}>{e.name}</p>
            <Link key={e.id} to={`${this.props.match.url}/edit/${e.id}`}>
              Edit
            </Link>
            <button>Join</button>
          </React.Fragment>
        );
      });
      dynamicDisplay = (
        <React.Fragment>
          <h2>
            You need to select organisation <br />
          </h2>
          {orgs}
          <Route
            path={`${this.props.match.url}/edit/${this.state.orgs[0].id}`}
            component={Edit}
          />
        </React.Fragment>
      );
    }

    return (
      <div className="mainSearchPage">
        <h1>DashBoard</h1>
        {dynamicDisplay}
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
