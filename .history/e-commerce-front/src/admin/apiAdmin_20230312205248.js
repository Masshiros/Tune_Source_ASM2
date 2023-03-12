import { API } from "../config";
export const createGenre = (userId, token, genre) => {
  return fetch(`${API}/genre/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(genre),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const createAlbum = (userId, token, album) => {
  return fetch(`${API}/album/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: album,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
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
// get all album
export const getAlbums = () => {
  return fetch(`${API}/album`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//delete albums
export const deleteAlbums = (albumID, userID, token) => {
  return 
}
