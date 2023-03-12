import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);
// eslint-disable-next-line
export default AdminRoute;
