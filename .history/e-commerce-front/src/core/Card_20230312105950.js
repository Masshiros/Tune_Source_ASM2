import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "./ShowImage";
const Card = ({ album }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{album.albumName}</div>
        <div className="card-body">
        <ShowImage item={album} url="album"/>
          <p>{album.albumDescription}</p>
          <p>${album.price}</p>
          <Link to="/">
            <button className="btn btn-outline-primary mt-2 mb-2">
              View Album
            </button>
          </Link>
          <button className="btn btn-outline- mt-2 mb-2">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
