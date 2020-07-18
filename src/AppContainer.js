import { connect } from "react-redux";
import { getLoggedInUserDetails } from "./actions/loginActions";
import App from "./App";

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLaoding: (loadingState) =>
      dispatch({ type: "SET_LOADING_STATE", payload: loadingState }),
    getLoggedInUserDetails: (token) => dispatch(getLoggedInUserDetails(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    isLoading: state.isLoading,
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
