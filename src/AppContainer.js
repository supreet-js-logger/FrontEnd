import { connect } from "react-redux";
import App from "./App";

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch({ type: "SET_TOKEN", payload: token }),
    setIsLaoding: (loadingState) =>
      dispatch({ type: "SET_LOADING_STATE", payload: loadingState }),
    setUser: (user) => dispatch({ type: "SET_USER", payload: user }),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
    isLoading: state.isLoading,
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
