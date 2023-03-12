import React from "React";
import { Link } from "react-router-dom";

const Card = ({ album }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">{album.albumName}</div>
        <div className="card-body">
          <p>{album.albumDescription}</p>
          <p>${album.price}</p>
          <Link></Link>
        </div>
      </div>
    </div>
  );
};
