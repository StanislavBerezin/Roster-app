import serverConnection from "../../axios/connection";

import * as actionTypes from "./actionTypes";

// these are used in async functionality
export const authInit = () => {
  return {
    type: actionTypes.AUTH_INIT
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

//aut, redirect, check auth state, needs to be implemented
