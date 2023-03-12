import React, { useEffect, useState } from "react";

const Checkbox = ({ genres, handleFilters }) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const currentGenreId = checked.indexOf(c);
    const newCheckedGenreId = [...checked];
    // if currently checked was not already in checked state > push
    if (currentGenreId === -1) {
      newCheckedGenreId.push(c);
    } else {
      newCheckedGenreId.splice(currentGenreId, 1);
    }
    console.log(newCheckedGenreId);
    setChecked(newCheckedGenreId);
    handleFilters(newCheckedGenreId)
  };

  return genres.map((c, i) => (
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

export default Checkbox;
