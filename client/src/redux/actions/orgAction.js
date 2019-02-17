import serverConnection from "../../axios/connection";

import * as actionTypes from "./actionTypes";

// these are used in async functionality
export const setOrg = payload => {
  return {
    type: actionTypes.CREATE_ORG,
    payload
  };
};
export const leaveOrg = () => {
  return {
    type: actionTypes.LEAVE_ORG
  };
};
export const getAllOrg = organisations => {
  return {
    type: actionTypes.GET_ALL_ORG,
    organisations
  };
};

export const requestAllOrg = () => {
  return dispatch => {
    serverConnection
      .get("/organisations/")
      .then(response => {
        console.log(response);
        dispatch(getAllOrg(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const requestLeaveOrg = () => {
  return dispatch => {
    serverConnection
      .post("/organisations/leave")
      .then(response => {
        dispatch(leaveOrg());
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const createAndJoin = payload => {
  return dispatch => {
    serverConnection
      .post("/organisations/create_join", payload)
      .then(response => {
        console.log(response);
        dispatch(setOrg(response));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
