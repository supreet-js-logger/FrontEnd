let initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isLoading: true,
};
const userReducer = function (state = initialState, action) {
  let udpatedState = { ...state };
  switch (action.type) {
    case "SET_TOKEN":
      if (action.payload) localStorage.setItem("token", action.payload);
      else localStorage.removeItem("token");
      udpatedState.token = action.payload;
      return udpatedState;
    case "SET_USER":
      udpatedState.user = action.payload;
      return udpatedState;
    case "SET_LOADING_STATE":
      udpatedState.isLoading = action.payload;
      return udpatedState;
    default:
      return udpatedState;
  }
};

export default userReducer;
