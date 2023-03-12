import React, { useState, useEffect } from "react";

import { getAlbums } from "./apiCore";
import Card from "./Card";

const Search = () => {
    const [data, setData] = useState({
        genres: []
    })
  return (
    <div>
      <h2>Search Bar</h2>
    </div>
  );
};
export default Search;
