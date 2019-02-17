import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Redirect } from "react-router-dom";
// import "./DashBoard.scss";
import Edit from "../edit/Edit";
import * as actions from "../../../redux/actions/index";

class SelectOrg extends Component {
  state = {
    orgs: [
      { name: "Bob Tavern", rate: "30%", id: 12 },
      { name: "Jos Qwerty", rate: "50%", id: 33 }
    ]
  };
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    if (this.props.isOrg) return null;
    // console.log(this.state.creation.name.value);
    let dynamicDisplay = this.state.orgs.map(e => {
      return (
        <React.Fragment key={e.id}>
          <p key={e.name}>{e.name}</p>
          <Link key={e.id} to={`/dashboard/edit/${e.id}`}>
            Edit
          </Link>
          <button>Join</button>
        </React.Fragment>
      );
    });

    return (
      <div className="mainSearchPage">
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
    isOrg: state.orgReducer.orgID !== null
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
