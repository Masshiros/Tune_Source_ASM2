import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";
import { getGenres } from "./apiCore";

const Shop = () => {
    const [genres, setGenres] = useState([])
    const init = () => {
        getGenres().then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error });
          } else {
            console.log("data", { data });
            setValues({ ...values, genres: data.data, formData: new FormData() });
          }
        });
      };
  return (
    <Layout
      title="Shop Page"
      description="Search and find you favorite album"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">left sidebar</div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  );
};

export default Shop;
