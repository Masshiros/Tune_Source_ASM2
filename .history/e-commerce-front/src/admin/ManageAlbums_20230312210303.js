import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { getAlbums, deleteAlbums } from "./apiAdmin";

const ManageAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { user, token } = isAuthenticate();
  const loadAlbum = () => {
    getAlbums().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAlbums(data);
      }
    });
  };
  const destroyAlbum = (albumID) => {
    deleteAlbums(albumID, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadAlbum(data);
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
        <div className="col-12">
          <ul className="list-group">
           {albums.map(()=>{
            
           })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default ManageAlbums;
