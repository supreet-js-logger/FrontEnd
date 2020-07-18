export const loginUser = (email, password) => {
  return async (dispatch, getState) => {
    let getLoggedInuser = `${process.env.API_URL}/auth/login`;
    let response = await fetch(getLoggedInuser, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await response.json();
    if (data.success) {
      dispatch({ type: "SET_TOKEN", payload: data.token });
      dispatch(getLoggedInUserDetails(data.token));
    } else {
      alert("invalid");
    }
  };
};

export const getLoggedInUserDetails = (token) => {
  return async (dispatch, getState) => {
    try {
      let getLoggedInuser = `${process.env.API_URL}/auth/me`;
      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      let response = await fetch(getLoggedInuser, {
        headers,
      });
      if (!response.ok) return;
      let data = await response.json();
      if (data.success) dispatch({ type: "SET_USER", payload: data.data });
    } catch (ex) {
      throw ex;
    } finally {
      dispatch({ type: "SET_LOADING_STATE", payload: false });
    }
  };
};

export const registerUser = (formData) => {
  return async (dispatch, getState) => {
    let getLoggedInuser = `${process.env.API_URL}/auth/register`;
    let response = await fetch(getLoggedInuser, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let data = await response.json();
    if (data.success) {
      dispatch({ type: "SET_TOKEN", payload: data.token });
      dispatch(getLoggedInUserDetails(data.token));
    } else {
      alert("invalid");
    }
  };
};
