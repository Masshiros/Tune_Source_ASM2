import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { createMusic } from "./apiAdmin";
import { getGenres } from "./apiAdmin";

const AddAlbum = () => {
  const [values, setValues] = useState({
    albumName: "",
    albumDescription: "",
    price: "",
    genres: [],
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
  const { user, token } = isAuthenticate();
  const {
    albumName,
    albumDescription,
    price,
    genres,
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
  // load genres and set form data
  const init = () => {
    getGenres().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log('data', {data});
        setValues({ ...values, genres: data.data, formData: new FormData() });
      }
    });
  };
  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createMusic(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          albumName: "",
          albumDescription: "",
          photo: "",
          price: "",
          artist: "",
          releaseDate: "",
          loading: false,
          createdAlbum: data.albumName,
        });
      }
    });
  };

  const newPostForm = () => (
    <form className="mb-3" onSubmit={clickSubmit}>
      <h4>Post Photo</h4>
      <div className="form-group">
        <label className="btn btn-outline-secondary">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image/*"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("albumName")}
          type="text"
          className="form-control"
          value={albumName}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Description</label>
        <textarea
          onChange={handleChange("albumDescription")}
          className="form-control"
          value={albumDescription}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Price</label>
        <input
          onChange={handleChange("price")}
          type="text"
          className="form-control"
          value={price}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Genre</label>
        <select onChange={handleChange("genreId")} className="form-control">
          <option>Please select</option>
          {values.genres &&
            values.genres.map((c, i) => (
              <option key={i} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label className="text-muted">Artist</label>
        <input
          onChange={handleChange("artist")}
          type="text"
          className="form-control"
          value={artist}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Release Date</label>
        <input
          onChange={handleChange("releaseDate")}
          type="date"
          className="form-control"
          value={releaseDate}
        />
      </div>
      <button className="btn btn-outline-primary">Create Album</button>
    </form>
  );
  const showError = () => (
    <div className="alert alert-danger" style={{display: }}></div>
  )
  return (
    <Layout
      title="Add a new album"
      description={`Have a nice day, ${user.name} , ready to add a new album?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};
export default AddAlbum;
