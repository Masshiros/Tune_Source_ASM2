import React from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticate();

  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/genre">
              Create Genre
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/create/album">
              Create Album
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">
          <b>Name:</b>  {name}</li>
          <li className="list-group-item"><b>Email:</b> {email}</li>
          <li className="list-group-item">
          <b>Role:</b> {role === 1 ? "Admin" : "Register User"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title="Admin Dashboard"
      description={`Have a nice day, ${name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};
export default AdminDashboard;
