import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" to="/"></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/"></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/"></Link>
      </li>
    </ul>
  </div>
);
