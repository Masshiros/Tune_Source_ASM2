import { API } from "../config";
export const read = (sortBy) => {
  return fetch(`${API}/album?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
