import React from "react";
import Layout from "../core/Layout";
import { API } from "../config";
const Signup = () => {
  const Signupform = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
      </div>
    </form>
  );
  return <Layout title="Signup" description="Signup to Tune Source"></Layout>;
};

export default Signup;
