import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { createMusic } from "./apiAdmin";

const AddMusic = () => {
  const { user, token } = isAuthenticate();
  return (
    <Layout
      title="Add a new music"
      description={`Have a nice day, ${user.name} , ready to add a new music?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2"></div>
      </div>
    </Layout>
  );
};
export default AddMusic;
