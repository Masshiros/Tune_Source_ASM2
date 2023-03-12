import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { readUser, updateUser, updatedUser } from "./apiUser";

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success } = values;
  const init = (userID) => {
    console.log(userID);
  };
  useEffect(() => {
    init(match.params.userID);
  }, []);
  
};
export default Profile;
