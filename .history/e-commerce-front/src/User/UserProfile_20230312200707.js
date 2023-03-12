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
  return (
    <Layout
      title="Home Page"
      description="Tune Source"
      className="container-fluid"
    >
      <Search />
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {albumsByArrival.map((album, i) => (
          <div key={i} className="col-4 mb-3">
            <Card album={album} />
          </div>
        ))}
      </div>

      <h2 className="mb-4">Best Seller</h2>
      <div className="row">
        {albumsBySell.map((album, i) => (
          <div key={i} className="col-4 mb-3">
            <Card album={album} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Profile;
