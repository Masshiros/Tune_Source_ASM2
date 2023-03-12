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
      <span className="input-group-test">
        <div className="input-group input-group-lg">
            <div className="input-group-prepend">
                <select className="btn mr-2" onChange={handleChange("genreId")}>
                    <option value="All">Pick genre</option>
                </select>
            </div>
          <input
            type="search"
            className="form-control"
            onChange={handleChange("search")}
            placeholder="Search by name"
          />
        </div>
      </span>
    </form>;
  };
  return (
    <div className="row">
      <div className="container">{searchForm()}</div>
    </div>
  );
};
export default Search;
