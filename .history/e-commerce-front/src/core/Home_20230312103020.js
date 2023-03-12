import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
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
      {JSON.stringify(albumsByArrival)}
      <hr />
      {JSON.stringify(albumsBySell)}
    </Layout>
  );
};

export default Home;
