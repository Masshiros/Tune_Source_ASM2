import React from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticate();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              My Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to="/profile/update">
              Update profile
            </Link>
          </li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Register User"}
          </li>
        </ul>
      </div>
    );
  };
  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Register User"}
          </li>
        </ul>
      </div>
    );
  };
  const purchaseHistory = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">History</li>
        </ul>
      </div>
    );
  };
  return (
    <Layout
      title="Dashboard"
      description="User Dashboard"
      className="container"
    >
      <div className="row">
        <div className="col-3">
          
        </div>
      </div>
    </Layout>
  );
};
export default Dashboard;
