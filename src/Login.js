import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const Login = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPass] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    let getLoggedInuser = `${process.env.API_URL}/auth/login`;
    let response = await fetch(getLoggedInuser, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      props.setToken(data.token);
    } else {
      alert("invalid");
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPass(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          id="passowrd"
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePass}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};
export default Login;
