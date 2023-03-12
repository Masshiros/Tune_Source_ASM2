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
export const createMusic = (userId, token, music) => {
    return fetch(`${API}/msuic/create/${userId}`, {
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
