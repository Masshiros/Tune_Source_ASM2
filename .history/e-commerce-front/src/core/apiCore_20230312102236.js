import { API } from "../config";

export const getAlbu, = () => {
    return fetch(`${API}/genre`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };