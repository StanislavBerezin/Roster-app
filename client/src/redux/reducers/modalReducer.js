import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  modalName: String,
  loginModal: false,
  registerModal: false
};

const toggleModal = (state, action) => {
  return updateObject(state, {
    [action.modalIdentifer]: !state[action.modalIdentifer],
    modalName: action.modalIdentifer
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return toggleModal(state, action);

    default:
      return state;
  }
};

export default reducer;
