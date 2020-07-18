import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";

const Projects = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    let getAllProjects = `${process.env.API_URL}/projects`;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${props.token}`,
    };
    let response = await fetch(getAllProjects, {
      headers,
    });
    let data = await response.json();
    if (data.success) {
      setProjects(data.data);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <CircularProgress />;
  return projects.map((project) => <>{JSON.stringify(project)}</>);
};

export default Projects;
