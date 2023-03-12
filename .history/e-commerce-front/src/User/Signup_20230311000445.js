import React from "react";
import Layout from "../core/Layout";
import { API } from "../config";
const Signup = () => {
  const Signupform = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input type="password" className="form-control" />
      </div>
    </form>
  );
  return (
    <Layout title="Signup" description="Signup to Tune Source">
      {Signupform}
    </Layout>
  );
};

export default Signup;
