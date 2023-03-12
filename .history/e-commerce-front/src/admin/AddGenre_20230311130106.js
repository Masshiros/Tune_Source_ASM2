import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";
import { createGenre } from "./apiAdmin";
const AddGenre = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticate();
  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create genre
    createGenre(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newGenreForm = () => {
    return (
      <form onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
        </div>
        <button className="btn btn-outline-primary">Create Genre</button>
      </form>
    );
  };
  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };
  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Genre should be unique</h3>;
    }
  };
  const goBack = () => {
    <div className="mt-5">
        <Link to="/admin/dashboard" className="text-warning"></Link>
    </div>
  };
  return (
    <Layout
      title="Add a new genre"
      description={`Have a nice day, ${user.name} , ready to add a new genre?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newGenreForm()}
        </div>
      </div>
    </Layout>
  );
};
export default AddGenre;
