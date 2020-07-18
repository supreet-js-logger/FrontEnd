import { connect } from "react-redux";
import Header from "./Header";
import { logOutUser } from "../../actions/userActions";

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOutUser());
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
