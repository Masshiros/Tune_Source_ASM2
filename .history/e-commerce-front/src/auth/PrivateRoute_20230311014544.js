import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate } from "./index";

const PrivateRoute = ({component: Component, ...rest})=>(
    Route
)