import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Signup = (props) => {
  let [values, setValues] = useState({
    name: "",
    orgnaizationName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.registerUser(values);
  };
  const handleChange = (event) => {
    let formValues = { ...values };
    formValues[event.target.name] = event.target.value;
    setValues(formValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          id="orgnaizationName"
          name="orgnaizationName"
          label="Organization name"
          type="text"
          value={values.orgnaizationName}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Signup
        </Button>
      </form>
    </>
  );
};
export default Signup;
