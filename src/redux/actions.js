import * as types from "./types";
import { token } from "./initialState";

export const get_user_info = (url, name) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(`${url}${name}`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      dispatch(set_user_info(await response.json()));
    } catch (error) {
      dispatch(error(error));
    }
  };
};

export const get_user_repos = (url, name) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(`${url}${name}`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      dispatch(set_user_repos(await response.json()));
    } catch (error) {
      dispatch(error(error));
    }
  };
};

export const get_search_users = (url, name) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await fetch(`${url}${name}`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      dispatch(set_search_users(await response.json()));
    } catch (error) {
      dispatch(error(error));
    }
  };
};

export const loading = () => {
  return {
    type: types.LOADING,
  };
};

export const set_user_info = (info) => {
  return {
    type: types.SET_USER_INFO,
    info,
  };
};

export const set_user_repos = (repos) => {
  return {
    type: types.SET_USER_REPOS,
    repos,
  };
};

export const set_search_users = (users) => {
  return {
    type: types.SET_SEARCH_USERS,
    users,
  };
};

export const error = (error) => {
  return {
    type: types.ERROR,
    error,
  };
};
