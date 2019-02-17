import { FadeLoader } from "react-spinners";
import { connect } from "react-redux";
import React from "react";
import styles from "./Spinner.module.scss";
const Spinner = ({ isLoadingAuth, isLoadingOrg }) => {
  let commonLoader = null;
  if (isLoadingOrg) commonLoader = isLoadingOrg;
  else if (isLoadingAuth) commonLoader = isLoadingAuth;

  return (
    <React.Fragment>
      <div className={styles.test}>
        <FadeLoader
          sizeUnit={"px"}
          size={1002}
          color={"#36D7B7"}
          loading={commonLoader}
        />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLoadingAuth: state.authReducer.loading,
    isLoadingOrg: state.orgReducer.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Spinner);
