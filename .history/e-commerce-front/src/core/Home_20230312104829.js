import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";
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
    <Layout title="Home Page" description="Tune Source">
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
      {albumsByArrival.map((album, i) => (
        <Card key={i} album={album} />
      ))}
      </div>
      
      <h2 className="mb-4">Best Seller</h2>
      <div className="row">
        
      </div>
      {albumsBySell.map((album, i) => (
        <Card key={i} album={album} />
      ))}
    </Layout>
  );
};

export default Home;
