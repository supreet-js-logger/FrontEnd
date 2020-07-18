import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "@material-ui/core";

// Route imports
import PrivateRoute from "./PrivateRoute/index";
import UnauthRoute from "./UnauthRoute";

// Screen imports
import Login from "./routes/Login";
import Signup from "./routes/SingUp";
import Header from "./Common/Header";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
// const mylogger = Tracker();

const App = (props) => {
  useEffect(() => {
    props.getLoggedInUserDetails();
  }, []);
  if (props.isLoading) return <CircularProgress />;

  return (
    <Router>
      <Container maxWidth={false} fixed={false} disableGutters>
        <Header />
        <Switch>
          <UnauthRoute path="/login">
            <Login />
          </UnauthRoute>
          <UnauthRoute path="/signup">
            <Signup />
          </UnauthRoute>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/project">
            <Projects />
          </PrivateRoute>
        </Switch>
      </Container>
    </Router>
  );
};
export default App;
