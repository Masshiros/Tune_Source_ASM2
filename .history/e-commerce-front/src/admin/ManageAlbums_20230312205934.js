import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { getAlbums, deleteAlbums } from "./apiAdmin";

const ManageAlbums = () => {
  const [album, setAlbums] = useState([]);

  const loadAlbum = () => {
    getAlbums().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAlbums(data);
      }
    });
  };
  useEffect(() => {
    loadAlbum();
  }, []);
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
