import React from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
const Dashboard = () => {
  return (
    <Layout title="Dashboard" description="User Dashboard">
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">Name</li>
          <li className="list-group-item">Email</li>
          <li className="list-group-item">Role</li>
        </ul>
      </div>
    </Layout>
  );
};
export default Dashboard;
