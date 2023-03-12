import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";

const ManageAlbums =() => {
    return (
        <Layout
          title="Manage Albums"
          description="Perform CRUD on albums"
          className="container-fluid"
        >
        <h2 className="mb-4">Manage Albums</h2>
        </Layout>
      );
}