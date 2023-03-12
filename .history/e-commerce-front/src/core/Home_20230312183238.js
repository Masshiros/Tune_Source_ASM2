import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
const Home = () => {
  const [albumsBySell, setAlbumBySell] = useState([]);
  const [albumsByArrival, setAlbumByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadAlbumsBySell = () => {
    getAlbums("sold").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setAlbumBySell(data);
      }
    });
  };
  const loadAlbumsByArrival = () => {
    getAlbums("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAlbumByArrival(data);
      }
    });
  };
  useEffect(() => {
    loadAlbumsByArrival();
    loadAlbumsBySell();
  }, []);

  return (
    <Layout
      title="Home Page"
      description="Tune Source"
      className="container-fluid"
    >
      <Search />
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {albumsByArrival.map((album, i) => (
          <div className="col-4 mb-3">
            <Card  album={album} />
          </div>
        ))}
      </div>

      <h2 className="mb-4">Best Seller</h2>
      <div className="row">
        {albumsBySell.map((album, i) => (
          <Card key={i} album={album} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
