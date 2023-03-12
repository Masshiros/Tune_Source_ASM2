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
  const searchData = () => {
    console.log(search);
  }
  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };
  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  const searchForm = () => (
    <form onSubmit={searchSubmit()}>
      <span className="input-group-text">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange("genreId")}>
              <option value="All">Pick genre</option>
              {genres.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="search"
            className="form-control"
            onChange={handleChange("search")}
            placeholder="Search by name"
          />
        </div>
        <div className="btn input-group-append" style={{ border: "none" }}>
          <button className="input-group-text">Search</button>
        </div>
      </span>
    </form>
  );
  return (
    <div className="row">
      <div className="container mb-3">{searchForm()}</div>
    </div>
  );
};
export default Search;
