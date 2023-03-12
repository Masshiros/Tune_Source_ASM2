import React, { useState } from "react";
import Layout from "../core/Layout";
import { API } from "../config";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const handleChange = name => event => {

  } 
  const Signupform = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input onChange={handleChange('name')} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input type="password" className="form-control" />
      </div>
      <button className="btn btn-primary"></button>
    </form>
  );
  return (
    <Layout
      title="Signup"
      description="Signup to Tune Source"
      className="container col-md-8 offset-md-2"
    >
      {Signupform()}
    </Layout>
  );
};

export default Signup;
