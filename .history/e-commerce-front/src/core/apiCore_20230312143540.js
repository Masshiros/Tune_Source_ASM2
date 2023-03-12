import { API } from "../config";
import queryString from "query-string";
export const getAlbums = (sortBy) => {
  return fetch(`${API}/album?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getGenres = () => {
  return fetch(`${API}/genre`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getFilteredAlbum = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`${API}/album/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const list = (params) => {
  const query = queryString.stringify(params);
  log
  return fetch(`${API}/album?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
