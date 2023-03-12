import React, { useEffect, useState } from "react";

const Checkbox = ({ genres }) => {
    const [checked, setChecked] = useState([])

    const handleToggle = c => () => {
        const currentGenreId = checked
    }

  return genres.map((c, i) => (
    <li key={i} className="list-unstyled">
      <input onChange={handleToggle(c._id)} type="checkbox" className="form-check-input" />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default Checkbox;
