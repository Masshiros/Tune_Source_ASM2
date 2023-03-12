import React, { useEffect, useState } from "react";

const Checkbox = ({ genres }) => {
  return genres.map((c, i) => (
    <li className="list-unstyled">
      <input type="checkbox" className="form-check-input" />
      <label htmlFor=""></label>
    </li>
  ));
};
