import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";

const Album = () => {
  const [album, setAlbum] = useState({});
  const [error, setError] = useState(false);

  const loadSingleAlbum = albumID => {

  }
  useEffect(() => {
    
  })
  return (
    <Layout
      title="Home Page"
      description="Tune Source"
      className="container-fluid"
    >
      <p> Album page</p>
    </Layout>
  );
};

export default Album;
