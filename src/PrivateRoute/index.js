import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteContainer;
