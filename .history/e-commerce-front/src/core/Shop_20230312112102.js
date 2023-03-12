import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";
import { getGenres } from "./apiCore";
import Checkbox from "./Checkbox";

const Shop = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(false);
  const init = () => {
    getGenres().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log("data", { data });
        setGenres(data.data);
      }
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Layout
      title="Shop Page"
      description="Search and find you favorite album"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">
        <ul>
            
        </ul>
            <Checkbox genres={genres}/>
        </div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  );
};

export default Shop;
