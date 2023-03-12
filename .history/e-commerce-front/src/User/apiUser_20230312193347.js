import { API } from "../config";
export const readUser = (userID, token) => {
  return fetch(`${API}/user/${userID}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
