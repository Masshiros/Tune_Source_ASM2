import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { getAlbums, deleteAlbums } from "./apiAdmin";
import ShowImage from "../core/ShowImage";

const ManageAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const { user, token } = isAuthenticate();
  const loadAlbum = () => {
    getAlbums().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log('data',data);
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
    console.log('updated album', albums);
  }, [albums]);
  return (
    <Layout
      title="Manage Albums"
      description="Perform CRUD on albums"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-12">
        <h2 className="text-center">
            Total {albums.length} albums
        </h2>
          <ul className="list-group">
            {albums.map((a, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{a.albumName}</strong>
                <ShowImage item={a} url="album" />
                <Link to={`/admin/album/update/${a._id}`}>
                  <span className="badge badge-warning badge-pill badge-lg">Update</span>
                </Link>
                <span onClick={() => destroyAlbum(a._id)} className="badge badge-danger badge-pill badge-lg">Delete</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default ManageAlbums;
