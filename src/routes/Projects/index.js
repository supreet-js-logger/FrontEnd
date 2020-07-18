import { connect } from "react-redux";
import Projects from "./Projects";
import { getAllProjects, createNewProject } from "../../actions/projectActions";
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProjects: (setProjects, setIsLoading) =>
      dispatch(getAllProjects(setProjects, setIsLoading)),
    createNewProject: (formData, closeFormAndUpdateList) =>
      createNewProject(formData, closeFormAndUpdateList),
  };
};

const mapStateToProps = (state) => {
  return {};
};
const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

export default ProjectsContainer;
