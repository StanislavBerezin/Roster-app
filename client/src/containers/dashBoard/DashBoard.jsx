import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import Shifts from "./shifts/Shifts";
import Edit from "./edit/Edit";
import "./DashBoard.scss";

class DashBoard extends Component {
  render() {
    return (
      <div className="mainSearchPage">
        <Link to={`${this.props.match.url}/shifts`}>Shifts</Link>
        <Link to={`${this.props.match.url}/edit`}>Edit</Link>

        <Route path={`${this.props.match.url}/shifts`} component={Shifts} />
        <Route path={`${this.props.match.url}/edit`} component={Edit} />
        <h1>DashBoard</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popularMovies: state.movieRequestor.searchResult,
    boolDisplay: state.movieRequestor.boolDisplay,
    boolError: state.movieRequestor.error,
    errorTxt: state.movieRequestor.errorTxt
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     sendRequest: query => dispatch(request_movie(query)),
//     getPopular: () => dispatch(get_popular())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MainSearch);

export default DashBoard;
