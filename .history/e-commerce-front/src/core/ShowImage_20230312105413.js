import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <div className="album-img">
    <img src={`${API}/${url}/photo/${item._id}`} alt="" />
  </div>
);
