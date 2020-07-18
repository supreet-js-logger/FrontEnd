let initialState = {
  user: null,
  isLoading: true,
};
const userReducer = function (state = initialState, action) {
  let udpatedState = { ...state };
  switch (action.type) {
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
