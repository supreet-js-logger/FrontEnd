import { getApi, postApi } from "../utils/apiUtil";
export const getAllProjects = (setProjects, setIsLoading) => {
  return async (dispatch) => {
    let response = await getApi("/projects");
    if (response.success) {
      setProjects(response.data);
      setIsLoading(false);
    }
  };
};

export const createNewProject = async (formData, closeFormAndUpdateList) => {
  let response = await postApi("/projects", formData);
  if (response.success) {
    closeFormAndUpdateList();
  }
};
