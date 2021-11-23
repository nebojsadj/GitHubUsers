export const initialState = {
  loading: false,
  info: {},
  repos: [],
  search: [],
  error: "",
};

export const token = "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";

export const basicURL = "https://api.github.com/users/";

export const searchURL = "https://api.github.com/search/users?q=";
