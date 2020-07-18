import React from "react";
import { Route, Redirect } from "react-router-dom";

const redirectToBaseOrHistory = (rest, defaultLocation) => {
  let returnLocation = defaultLocation;
  if (
    rest &&
    rest.location &&
    rest.location.state &&
    rest.location.state.from &&
    rest.location.state.from.pathname
  )
    returnLocation = rest.location.state.from.pathname;
  return returnLocation;
};
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const UnauthRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !rest.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectToBaseOrHistory(rest, "/"),
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default UnauthRoute;
