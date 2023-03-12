import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { createMusic } from "./apiAdmin";

const AddAlbum = () => {
  const { user, token } = isAuthenticate();
  const [values, setValues] = useState({
    albumName: "",
    albumDescription: "",
    price: "",
    genre: [],
    genreId: "",
    artist: "",
    releaseDate: "",
    photo: "",
    loading: false,
    error: "",
    createdAlbum: "",
    redirectToProfile: false,
    formData: "",
  });
  const {
    albumName,
    albumDescription,
    price,
    genre,
    genreId,
    artist,
    releaseDate,
    photo,
    loading,
    error,
    createdAlbum,
    redirectToProfile,
    formData,
  } = values;
  const newPostForm = () => (
    <form className="mb-3">
      <h4>Post Photo</h4>
      <div className="form-group">
        <label >
          <input type="file" name="photo" id="" />
        </label>
      </div>
    </form>
  )
    return (
    <Layout
      title="Add a new album"
      description={`Have a nice day, ${user.name} , ready to add a new album?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2"></div>
      </div>
    </Layout>
  );
};
export default AddAlbum;
