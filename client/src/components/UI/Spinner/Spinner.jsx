import { FadeLoader } from "react-spinners";
import { connect } from "react-redux";
import React from "react";
import styles from "./Spinner.module.scss";
const Spinner = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <React.Fragment>
      <div className={styles.test}>
        <FadeLoader
          sizeUnit={"px"}
          size={1002}
          color={"#36D7B7"}
          loading={isLoading}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.authReducer.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Spinner);
