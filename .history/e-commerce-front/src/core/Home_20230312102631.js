import React, { useState } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
const Home = () => {
  const [albumsBySell, setAlbumBySell] = useState([]);
  const [albumsByArrival, setAlbumByArrival] = useState([]);
  const [error, setError] = useState([]);

  const loadAlbumsBySell = () => {
    getAlbums("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAlbumBySell(data);
      }
    });
  };

  return (
    <Layout title="Home Page" description="Tune Source">
      ...
    </Layout>
  );
};

export default Home;
