import { API } from "../config";
export const readUser = (userID, token) => {
  return fetch(`${API}/user/`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
