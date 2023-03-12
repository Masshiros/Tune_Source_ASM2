import React from "react";

const Layout = ({ title = "Title", description = "Description", children }) => (
  <div>
    <div className="jumbotron">
      <h2>{title}</h2>
      <p className="lead"> {description}</p>
    </div>
    div
  </div>
);

export default Layout;
