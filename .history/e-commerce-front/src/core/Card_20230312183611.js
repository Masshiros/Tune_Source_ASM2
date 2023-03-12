import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
const Card = ({ album, showViewAlbumButton }) => {
  return (
    <div className="card">
      <div className="card-header">{album.albumName}</div>
      <div className="card-body">
        <ShowImage item={album} url="album" />
        <p>{album.albumDescription.substring(0, 30)}</p>
        <p>${album.price}</p>
        <Link to={`/album/${album._id}`}>
          <button className="btn btn-outline-primary mt-2 mb-2 mr-2">
            View Album
          </button>
        </Link>
        <button className="btn btn-outline-warning mt-2 mb-2">
          Add to card
        </button>
      </div>
    </div>
  );
};
export default Card;
