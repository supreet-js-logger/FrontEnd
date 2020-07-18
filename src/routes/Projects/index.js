import { connect } from "react-redux";
import Projects from "./Projects";

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

export default ProjectsContainer;
