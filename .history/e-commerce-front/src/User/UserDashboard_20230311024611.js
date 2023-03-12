import React from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
const Dashboard = () => {
  return <Layout title="Dashboard" description="User Dashboard">
  <div className="card mb-5">
    <h3 className="card-header"></h3>
  </div>
  </Layout>;
};
export default Dashboard;
