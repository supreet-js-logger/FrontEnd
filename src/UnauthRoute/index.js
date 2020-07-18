import { connect } from "react-redux";
import UnauthRoute from "./UnauthRoute";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const UnauthRouteContainer = connect(mapStateToProps)(UnauthRoute);

export default UnauthRouteContainer;
