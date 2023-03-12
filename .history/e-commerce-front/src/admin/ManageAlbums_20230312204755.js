import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";

const ManageAlbums =() => {
    return (
        <Layout
          title="Manage Albums"
          description="Tune Source"
          className="container-fluid"
        >
        <h2 className="mb-4">Mange Albums</h2>
        </Layout>
      );
}