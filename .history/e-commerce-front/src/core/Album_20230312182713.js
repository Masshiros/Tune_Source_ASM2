import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getAlbums, read } from "./apiCore";
import Card from "./Card";

const Album = (props) => {
  const [album, setAlbum] = useState({});
  const [error, setError] = useState(false);

  const loadSingleAlbum = (albumID) => {
    read(albumID).then((data) => {
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
      title={album && album.albumName}
      description={album && album.albumDescription.substring(0, 100)}
      className="container-fluid"
    >
      <h2 className="mb-4">Detail Album</h2>
      <div className="row">{JSON.stringify(album)}</div>
    </Layout>
  );
};

export default Album;
