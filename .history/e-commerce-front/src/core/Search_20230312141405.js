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
  const { genres, genreId, search, results, searched } = data;
  const loadGenres = () => {
    getGenres().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, genres: data.data });
      }
    });
  };
  useEffect(() => {
    loadGenres();
  }, []);
  const searchSubmit = () => {};
  const handleChange = () => {};
  const searchForm = () => {
    <form onSubmit={searchSubmit()}>
      <input
        type="search"
        className="form-control"
        onChange={handleChange("search")}
        placeholder="Search by name"
      />
    </form>;
  };
  return (
    <div className="row">
      <div className="container">{searchForm()}</div>
    </div>
  );
};
export default Search;
