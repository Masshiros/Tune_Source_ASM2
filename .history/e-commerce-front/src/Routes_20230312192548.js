import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Shop from "./core/Shop";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./user/UserDashboard";
import Profile from "./user/UserProfile";
import AdminDashboard from "./user/AdminDashboard";
import AddGenre from "./admin/AddGenre";
import AddAlbum from "./admin/AddAlbum";
import Album from "./core/Album";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/album/:albumID" exact component={Album} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/genre" exact component={AddGenre} />
        <AdminRoute path="/create/album" exact component={AddAlbum} />
        <PrivateRoute path="/profile/:userID" exact component={Dashboard
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
