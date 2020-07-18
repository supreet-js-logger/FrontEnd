import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Login from "./Login";
import { Container } from "@material-ui/core";
import Signup from "./Signup";
import Header from "./Common/Header";
// const mylogger = Tracker();

const App = (props) => {
  let [showLogin, setShowLogin] = useState(false);
  let [showSignup, setShowSignup] = useState(false);
  const getLoggedInUserDetails = async () => {
    let getLoggedInuser = `${process.env.API_URL}/auth/me`;
    let response = await fetch(getLoggedInuser, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
    });
    let data = await response.json();
    if (data.success) props.setUser(data.data);
    props.setIsLaoding(false);
  };

  useEffect(() => {
    debugger;
    if (props.token || props.isLoading) getLoggedInUserDetails();
  }, [props.token, props.isLoading]);
  console.dir(props);
  if (props.isLoading) return <CircularProgress />;

  return (
    <>
      <Container maxWidth={false} fixed={false} disableGutters={true}>
        <Header />
        <Container>
          {!props.user && (
            <>
              {showLogin && <Login setToken={props.setToken} />}
              {showSignup && <Signup setToken={props.setToken} />}
            </>
          )}
          {props.user && JSON.stringify(props.user)}
        </Container>
      </Container>

      {/* <button onClick={() => randomConsoleLog()}>
        Generate random console log
      </button>
      <button onClick={() => throwRandomError()}>Generate random error</button>
      <button onClick={() => getLogCount()}>Alert log count</button> */}
    </>
  );
};
export default App;
