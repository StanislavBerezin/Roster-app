import * as actionTypes from "./actionTypes";
import serverConnection from "../../axios/connection";

export const setShifts = payload => {
  return {
    type: actionTypes.SET_SHIFTS,
    payload
  };
};
export const getShifts = () => {
  return dispatch => {
    serverConnection
      .get("/shifts/")
      .then(response => {
        console.log(response);
        dispatch(setShifts(response.data));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const deleteShift = id => {
  return dispatch => {
    serverConnection
      .delete(`/shifts/${id}`)
      .then(response => {
        dispatch(getShifts());
      })
      .catch(e => {
        console.log(e);
      });
  };
};
export const applyForShift = payload => {
  return dispatch => {
    serverConnection
      .post("/shifts/", payload)
      .then(response => {
        dispatch(getShifts());
      })
      .catch(e => {
        console.log(e);
      });
  };
};

export const updateShift = payload => {
  return dispatch => {
    serverConnection
      .put(`/shifts/${payload.id}`, payload)
      .then(response => {
        console.log(response);
        dispatch(getShifts());
      })
      .catch(e => {
        console.log(e);
      });
  };
};
