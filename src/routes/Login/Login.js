import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Login = (props) => {
  let [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    props.loginUser(values.email, values.password);
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
          Login
        </Button>
      </form>
    </>
  );
};
export default Login;
