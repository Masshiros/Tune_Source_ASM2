import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
const Card = ({ album, showViewAlbumButton = true }) => {
  const showViewButton = (showViewAlbumButton) => {
    return (
      showViewAlbumButton && (
        <Link to={`/album/${album._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2">
            View Album
          </button>
        </Link>
      )
    );
  };
  const showAddToCardButton = () => {
    return (
      <button className="btn btn-outline-warning mt-2 mb-2">Add to card</button>
    );
  };
  const showArtist = () => {
    return artist ? (
      <span></span>
    )
  }
  return (
    <div className="card">
      <div className="card-header name">{album.albumName}</div>
      <div className="card-body">
        <ShowImage item={album} url="album" />
        <p className="lead mt-2">{album.albumDescription.substring(0, 30)}</p>
        <p className="black-10">${album.price}</p>
        <p className="black-9">Genre: {album.genreId && album.genreId.name}</p>
        <p className="black-8">Artist: {album.artist && album.artist}</p>
        <p className="black-7">Added on {moment(album.createdAt).fromNow()}</p>
        {showViewButton(showViewAlbumButton)}
        {showAddToCardButton()}
      </div>
    </div>
  );
};
export default Card;
