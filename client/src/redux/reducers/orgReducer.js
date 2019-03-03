import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utils";

const initialState = {
  orgID: null,
  name: String,
  hourlyRate: Number,
  organisations: [],
  shifts: []
};

const setShifts = (state, action) => {
  return updateObject(state, { shifts: action.payload });
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
    orgID: null,
    shifts: []
  });
};

const setOrg = (state, action) => {
  let fix = null;

  //time is of the essence, otherwise would do a proper
  if (action.payload.hourlyRate) fix = "hourlyRate";
  if (action.payload.hourly_rate) fix = "hourly_rate";

  console.log(action.payload);
  return updateObject(state, {
    name: action.payload.name,
    hourlyRate: action.payload[fix],
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
    case actionTypes.SET_SHIFTS:
      return setShifts(state, action);
    default:
      return state;
  }
};

export default reducer;
