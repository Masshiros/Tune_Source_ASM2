import React, { useEffect, useState, Fragment } from "react";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState();
  return prices.map((p, i) => (
    <div key={i}>
      <input
        onChange={handleChange}
        value={``}
        type="radio"
        className="form-check-input"
      />
      <label className="form-check-label">{c.name}</label>
    </div>
  ));
};

export default RadioBox;
