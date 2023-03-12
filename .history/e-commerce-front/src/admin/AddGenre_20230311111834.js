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

  const newGenreForm = () => {
    return(

    )
    
  };
  return (
    <Layout
      title="Add a new genre"
      description={`Have a nice day, ${name} , ready to add a new genre?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newGenreForm()}</div>
      </div>
    </Layout>
  );
};
export default AddGenre;
