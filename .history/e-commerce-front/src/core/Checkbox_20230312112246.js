import React, { useEffect, useState } from "react";

const Checkbox = ({ genres }) => {
    const [checked, setChecked] = useState([])

    
  return genres.map((c, i) => (
    <li key={i} className="list-unstyled">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default Checkbox;
