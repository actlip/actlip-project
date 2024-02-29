import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRouter({ children, ...rest }) {
  const firstLogin = localStorage.getItem("firstLogin");

  return (
    <Route {...rest}>
      {rest.path === "/login" && firstLogin ? <Redirect to="/" /> : children}
    </Route>
  );
}

export default PrivateRouter;
