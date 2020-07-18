import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Button,
  TextField,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const initialFormValues = {
  name: "",
  type: "",
};
const Projects = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);
  let [values, setValues] = useState(initialFormValues);
  const handleSubmit = async (event) => {
    event.preventDefault();
    props.createNewProject(values, () => {
      props.getAllProjects(setProjects, setIsLoading);
      setShowAddProjectForm(false);
      setValues(initialFormValues);
    });
  };
  const handleChange = (event) => {
    let formValues = { ...values };
    formValues[event.target.name] = event.target.value;
    setValues(formValues);
  };

  useEffect(() => {
    props.getAllProjects(setProjects, setIsLoading);
  }, []);

  if (isLoading) return <CircularProgress />;
  return (
    <>
      <Button color="inherit" onClick={() => setShowAddProjectForm(true)}>
        Add a new Project
      </Button>
      {showAddProjectForm && (
        <form onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="Project name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <TextField
            id="type"
            name="type"
            label="Type"
            type="text"
            value={values.type}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <IconButton
            aria-label="close project form"
            aria-haspopup="true"
            onClick={() => {
              setShowAddProjectForm(false);
              setValues(initialFormValues);
            }}
            color="inherit"
          >
            <Close />
          </IconButton>
        </form>
      )}
      {projects.map((project) => {
        return <div key={project._id}>{JSON.stringify(project)}</div>;
      })}
    </>
  );
};

export default Projects;
