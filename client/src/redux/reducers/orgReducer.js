import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  orgID: null,
  orgName: String,
  orgRate: Number
};

const setOrg = (state, action) => {
  return updateObject(state, { orgID: action.id });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORG:
      return setOrg(state, action);

    default:
      return state;
  }
};

export default reducer;
