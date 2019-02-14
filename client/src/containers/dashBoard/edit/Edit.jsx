import React, { Component } from "react";
import { connect } from "react-redux";

// import "./DashBoard.scss";

class Edit extends Component {
  render() {
    return (
      <div className="mainSearchPage">
        <h1>Edit</h1>
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

export default Edit;
