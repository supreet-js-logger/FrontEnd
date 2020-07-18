import { connect } from "react-redux";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch({ type: "SET_TOKEN", payload: null });
      dispatch({ type: "SET_USER", payload: null });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
