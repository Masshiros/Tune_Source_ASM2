import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { getAlbums, delete } from "./apiAdmin";

const ManageAlbums = () => {
  return (
    <Layout
      title="Manage Albums"
      description="Perform CRUD on albums"
      className="container-fluid"
    >
      <div className="row">
        <div>...</div>
      </div>
    </Layout>
  );
};
export default ManageAlbums;
