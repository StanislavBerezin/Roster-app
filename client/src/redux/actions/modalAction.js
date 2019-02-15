import * as actionTypes from "./actionTypes";

// these are used in async functionality
export const toggleModal = payload => {
  return {
    type: actionTypes.TOGGLE_MODAL,
    modalIdentifer: payload
  };
};
