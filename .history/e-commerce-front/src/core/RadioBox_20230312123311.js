import React, { useEffect, useState, Fragment } from "react";

const RadioBox = ({ prices }) => {
  const [value, setValue] = useState();
  return (
    <Fragment>
      {JSON.stringify(prices)}
      <input type="radio" className="mr-2 ml-4" />
      <label className="form-check-label"></label>
    </Fragment>
  );
};
