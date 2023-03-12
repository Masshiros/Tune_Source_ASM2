import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import {  read, listRelated } from "./apiCore";
import Card from "./Card";

const Album = (props) => {
  const [album, setAlbum] = useState({});
  const [error, setError] = useState(false);

  const loadSingleAlbum = (albumID) => {
    read(albumID).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAlbum(data.data);
        // related album
        listRelated(data._id).then(data => {
            if(data.error){
                setError(data.error)
            }else
        })
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
      description={
        album &&
        album.albumDescription &&
        album.albumDescription.substring(0, 100)
      }
      className="container-fluid"
    >
      <div className="row">
        {album && album.albumDescription && <Card album={album} showViewAlbumButton={false} />}
      </div>
    </Layout>
  );
};

export default Album;
