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

export const logOutUser = () => {
  return async (dispatch) => {
    let response = await getApi("/auth/logout");
    if (response.success) {
      dispatch({ type: "SET_USER", payload: null });
    } else {
      alert("invalid");
    }
  };
};

export const getLoggedInUserDetails = () => {
  return async (dispatch) => {
    try {
      let response = await getApi("/auth/me");
      if (response.success)
        dispatch({ type: "SET_USER", payload: response.data });
    } catch (ex) {
      console.log(ex);
    }
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
