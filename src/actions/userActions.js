import { getApi, postApi } from "../utils/apiUtil";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    let response = await postApi("/auth/login", { email, password });
    if (response.success) {
      dispatch(getLoggedInUserDetails());
    } else {
      alert("invalid");
    }
  };
};

export const getLoggedInUserDetails = () => {
  return async (dispatch) => {
    let response = await getApi("/auth/me");
    if (response.success)
      dispatch({ type: "SET_USER", payload: response.data });

    dispatch({ type: "SET_LOADING_STATE", payload: false });
  };
};

export const registerUser = (formData) => {
  return async (dispatch) => {
    let response = await postApi("/auth/register", formData);
    if (response.success) {
      dispatch(getLoggedInUserDetails());
    } else {
      alert("invalid");
    }
  };
};
