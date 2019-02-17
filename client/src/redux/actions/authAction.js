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

export const authLogOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token
  };
};

export const authRequest = (payload, whichAuth) => {
  return dispatch => {
    dispatch(authInit());
    let url = null;
    if (whichAuth === "loginModal") url = "login";
    else url = "signup";

    serverConnection
      .post(`/auth/${url}`, payload)
      .then(response => {
        localStorage.setItem("token", response.data.sessionId);
        dispatch(authSuccess(response.data.sessionId));
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const checkIfAuth = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(authLogOut());
    } else {
      dispatch(authSuccess(token));
    }
  };
};

export const logOut = () => {
  return dispatch => {
    dispatch(authInit());
    serverConnection
      .delete("/auth/logout")
      .then(res => {
        localStorage.removeItem("token");

        dispatch(authLogOut());
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};
//aut, redirect, check auth state, needs to be implemented
