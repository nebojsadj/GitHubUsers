import { initialState } from "./initialState";
import * as types from "./types";

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.SET_USER_INFO:
      return {
        ...state,
        loading: false,
        info: action.info,
      };
    case types.SET_USER_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.repos,
      };
    case types.SET_SEARCH_USERS:
      return { ...state, loading: false, search: action.users };
    case types.ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default usersReducer;
