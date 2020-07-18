export const getAllProjects = (setProjects, setIsLoading) => {
  return async (dispatch, getState) => {
    let store = getState();
    let getAllProjects = `${process.env.API_URL}/projects`;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${store.token}`,
    };
    let response = await fetch(getAllProjects, {
      headers,
    });
    let data = await response.json();
    if (data.success) {
      setProjects(data.data);
      setIsLoading(false);
    }
  };
};

export const createNewProject = (formData, closeFormAndUpdateList) => {
  return async (dispatch, getState) => {
    let store = getState();
    let createNewProject = `${process.env.API_URL}/projects`;
    let response = await fetch(createNewProject, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${store.token}`,
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log(response);
      return;
    }
    let data = await response.json();
    if (data.success) {
      closeFormAndUpdateList();
    }
  };
};
