import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";

const AddGenre = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const { user, token } = isAuthenticate();
  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSucess(false);
    // make request to api to create genre
  };

  const newGenre = () => {
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
        />
      </div>
      <button className="btn btn-outline-primary">Create Genre</button>
    </form>;
  };
  return (
    <Layout
      title="Dashboard"
      description={`Have a nice day, ${name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-3">{adminLinks()}</div>
        <div className="col-9">{adminInfo()}</div>
      </div>
    </Layout>
  );
};
