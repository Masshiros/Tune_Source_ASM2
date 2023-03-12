import React, { useEffect, useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link,Redirect } from "react-router-dom";
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
  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateUser(match.params.userID, token, { name, email, password }).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          updatedUser(data, () => {
            setValues({
              ...values,
              name: data.name,
              email: data.email,
              success: true,
            });
          });
        }
      }
    );
  };
  const redirectUser =(success)=>{
    if(success){
        return <Redirect/>
    }
  }
  const profileUpdate = (name, email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
  return (
    <Layout
      title="Profile"
      description="Update your profile"
      className="container-fluid"
    >
      <h2 className="mb-4">Profile update</h2>
      {profileUpdate(name, email, password)}
      {}
    </Layout>
  );
};
export default Profile;
