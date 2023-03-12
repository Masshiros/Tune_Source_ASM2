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
  const { token } = isAuthenticate();
  const { name, email, password, error, success } = values;
  const init = (userID) => {
    readUser(userID, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      }
    });
  };
  useEffect(() => {
    init(match.params.userID);
  }, []);
  return (
    <Layout
      title="Profile"
      description="Update your profile"
      className="container-fluid"
    >
      <h2 className="mb-4">Profile update</h2>
    </Layout>
  );
};
export default Profile;
