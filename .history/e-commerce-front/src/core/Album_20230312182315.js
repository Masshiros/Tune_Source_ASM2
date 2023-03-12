import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums } from "./apiCore";
import Card from "./Card";

const Album = (props) => {
  const [album, setAlbum] = useState({});
  const [error, setError] = useState(false);

  const loadSingleAlbum = (albumID) => {
    read().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log(data);
        setAlbum(data);
      }
    });
  };
  useEffect(() => {
    const albumID = props.match.params.albumID;
    loadSingleAlbum(albumID);
  }, []);
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
