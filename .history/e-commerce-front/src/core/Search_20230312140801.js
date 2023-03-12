import React, { useState, useEffect } from "react";

import { getGenres } from "./apiCore";
import Card from "./Card";

const Search = () => {
  const [data, setData] = useState({
    genres: [],
    genreId: "",
    search: "",
    results: [],
    searched: false,
  });
  const loadGenres =() => {
    getGenres().then(data => {
        if(data.error){
            console.log(data.error);
        }
    })
  }
  return (
    <div>
      <h2>Search Bar</h2>
    </div>
  );
};
export default Search;
