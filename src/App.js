import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Login from "./Login";
import { Button, Container } from "@material-ui/core";
import Signup from "./Signup";
import MainApp from "./MainApp";
// const mylogger = Tracker();

const App = () => {
  let [isLaoding, setLoadingState] = useState(true);
  let [token, setToken] = useState(localStorage.getItem("token"));
  let [user, setUser] = useState(null);
  let [showLogin, setShowLogin] = useState(false);
  let [showSignup, setShowSignup] = useState(false);
  const getLoggedInUserDetails = async () => {
    let getLoggedInuser = `${process.env.API_URL}/auth/me`;
    let response = await fetch(getLoggedInuser, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    if (data.success) setUser(data.data);
    setLoadingState(false);
  };
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };
  useEffect(() => {
    if (token || isLaoding) getLoggedInUserDetails();
  }, [token]);
  if (isLaoding) return <CircularProgress />;

  return (
    <>
      <Container maxWidth={false} fixed={false} disableGutters={true}>
        <MainApp
          user={user}
          setShowLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          setShowSignup={() => {
            setShowSignup(true);
            setShowLogin(false);
          }}
          logOut={logOut}
        />
        <Container>
          {!user && (
            <>
              {showLogin && <Login setToken={setToken} />}
              {showSignup && <Signup setToken={setToken} />}
            </>
          )}
          {user && JSON.stringify(user)}
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
