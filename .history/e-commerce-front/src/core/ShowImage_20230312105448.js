import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <div className="album-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.albumName}
      className="mb-3"
      style={{maxHeight:"100%"}}
    />
  </div>
);
