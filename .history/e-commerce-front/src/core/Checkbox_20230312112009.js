import React, { useEffect, useState } from "react";

const Checkbox = ({ genres }) => {
  return genres.map((c, i) => (
    <li className="list-unstyled">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default Ch
