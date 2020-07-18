import { connect } from "react-redux";
import Signup from "./Signup";
import { registerUser } from "../../actions/userActions";

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (formData) => dispatch(registerUser(formData)),
  };
};

const mapStateToProps = (state) => {
  return {};
};
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;
