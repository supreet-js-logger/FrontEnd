import { connect } from "react-redux";
import Projects from "./Projects";
import { getAllProjects, createNewProject } from "../../actions/projectActions";
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: (setProjects, setIsLoading) =>
      dispatch(getAllProjects(setProjects, setIsLoading)),
    createNewProject: (formData, closeFormAndUpdateList) =>
      dispatch(createNewProject(formData, closeFormAndUpdateList)),
  };
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
