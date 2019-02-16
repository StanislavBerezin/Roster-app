import serverConnection from "../../axios/connection";

import * as actionTypes from "./actionTypes";

// these are used in async functionality
export const setOrg = () => {
  return {
    type: actionTypes.SET_ORG
  };
};
