import React, { useEffect, useState, Fragment } from "react";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState();
  return prices.map((, i) => (
    <li key={i} className="list-unstyled">
      <input
        onChange={handleToggle(c._id)}
        value={checked.indexOf(c._id === -1)}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default RadioBox;
