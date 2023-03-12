import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#ff9900'}
    }
}

const Menu = () => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signin">
          Signin
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
