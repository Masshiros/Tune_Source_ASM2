import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
const Card = ({ album, showViewAlbumButton = true }) => {
  const showViewButton = (showViewAlbumButton) => {
    return (
      showViewAlbumButton && (
        <button className="btn btn-outline-warning mt-2 mb-2">
          View Album
        </button>
      )
    );
  };
  return (
    <div className="card">
      <div className="card-header">{album.albumName}</div>
      <div className="card-body">
        <ShowImage item={album} url="album" />
        <p>{album.albumDescription.substring(0, 30)}</p>
        <p>${album.price}</p>
        <Link to={`/album/${album._id}`}>
          {showViewButton(showViewAlbumButton)}
        </Link>
        <button className="btn btn-outline-warning mt-2 mb-2">
          Add to card
        </button>
      </div>
    </div>
  );
};
export default Card;
