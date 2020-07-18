import { connect } from "react-redux";
import Login from "./Login";
import { loginUser } from "../../actions/userActions";

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {};
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
