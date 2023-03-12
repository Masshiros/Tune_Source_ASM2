import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Album = (props) => {
  const [album, setAlbum] = useState({});
  const [relatedAlbum, setRelatedAlbum] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleAlbum = (albumID) => {
    read(albumID).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setAlbum(data.data);
        // related album
        listRelated(data.data._id).then((res) => {
          console.log(res);
          if (res.error) {
            setError(res.error);
          } else {
            setRelatedAlbum(res);
          }
        });
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
        <div className="col-8">
          {album && album.albumDescription && (
            <Card album={album} showViewAlbumButton={false} />
          )}
        </div>
        <div className="col-4">
            <h4>Related </h4>
        </div>
      </div>
    </Layout>
  );
};

export default Album;
