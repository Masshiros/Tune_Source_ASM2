import { API } from "../config";

export const getAlbums = (sortBy) => {
    return fetch(`${API}/a`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };