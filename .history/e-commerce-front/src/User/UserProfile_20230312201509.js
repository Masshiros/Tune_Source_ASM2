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
    error: false,
    success: false,
  });
  const { token } = isAuthenticate();
  const { name, email, password, error, success } = values;
  const init = (userID) => {
    readUser(userID, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({
          ...values,
          name: data.name,
          email: data.email,
        });
      }
    });
  };
  useEffect(() => {
    init(match.params.userID);
  }, []);
  const profileUpdate = (name,email,password) => (
    <form>
        <div className="form-group">
            <label c></label>
        </div>
    </form>
  )
  return (
    <Layout
      title="Profile"
      description="Update your profile"
      className="container-fluid"
    >
      <h2 className="mb-4">Profile update</h2>
      {profileUpdate(name ,email,password)}
    </Layout>
  );
};
export default Profile;
