import { connect } from "react-redux";
import { getLoggedInUserDetails } from "./actions/userActions";
import App from "./App";

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLaoding: (loadingState) =>
      dispatch({ type: "SET_LOADING_STATE", payload: loadingState }),
    getLoggedInUserDetails: () => dispatch(getLoggedInUserDetails()),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
