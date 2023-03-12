import { API } from "../config";
export const readUser = (userID, token) => {
  return fetch(`${API}/user/${userID}`, {
    method: "GET",
    header
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
