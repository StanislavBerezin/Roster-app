import * as actionTypes from "../actions/actionTypes";
import { updateObject, execute } from "../utils";

const initialState = {
  error: null,
  loading: false,
  isInOrganisation: false,
  token: null
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    token: action.token
  });
};

const authFailed = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogOut = (state, action) => {
  return updateObject(state, { token: null, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_INIT:
      return authStart(state, action);

    case actionTypes.AUTH_FAIL:
      return authFailed(state, action);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogOut(state, action);

    default:
      return state;
  }
};

export default reducer;
