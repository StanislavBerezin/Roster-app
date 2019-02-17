import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  orgID: null,
  orgName: String,
  hourlyRate: Number,
  organisations: []
};

const setOrg = (state, action) => {
  return updateObject(state, { orgID: action.id });
};

const setAll = (state, action) => {
  return updateObject(state, { organisations: action.organisations });
};
const leaveOrg = (state, action) => {
  return updateObject(state, {
    orgName: String,
    hourlyRate: Number,
    orgID: null
  });
};

const createOrgAndJoin = (state, action) => {
  return updateObject(state, {
    orgName: action.payload.data.name,
    hourlyRate: action.payload.data.hourlyRate,
    orgID: action.payload.data.id
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORG:
      return setOrg(state, action);
    case actionTypes.GET_ALL_ORG:
      return setAll(state, action);
    case actionTypes.CREATE_ORG:
      return createOrgAndJoin(state, action);
    case actionTypes.LEAVE_ORG:
      return leaveOrg(state, action);
    default:
      return state;
  }
};

export default reducer;
