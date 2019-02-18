import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  orgID: null,
  name: String,
  hourlyRate: Number,
  organisations: []
};

const joinOrg = (state, action) => {
  return updateObject(state, {
    orgID: action.payload.data.id,
    name: action.payload.data.name,
    hourlyRate: action.payload.data.hourlyRate
  });
};

const setAll = (state, action) => {
  return updateObject(state, { organisations: action.organisations });
};

const leaveOrg = (state, action) => {
  return updateObject(state, {
    name: String,
    hourlyRate: Number,
    orgID: null
  });
};

const setOrg = (state, action) => {
  return updateObject(state, {
    name: action.payload.name,
    hourlyRate: action.payload.hourlyRate,
    orgID: action.payload.id
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOIN_ORG:
      return joinOrg(state, action);
    case actionTypes.GET_ALL_ORG:
      return setAll(state, action);
    case actionTypes.SET_ORG:
      return setOrg(state, action);
    case actionTypes.LEAVE_ORG:
      return leaveOrg(state, action);
    default:
      return state;
  }
};

export default reducer;
