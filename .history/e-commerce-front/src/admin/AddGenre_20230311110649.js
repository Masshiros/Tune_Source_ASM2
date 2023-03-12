import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticate } from "../auth";
import { Link } from "react-router-dom";

const AddGenre = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [sucess, setSucess] = useState(false);

  const { user, token } = isAuthenticate();
  const newGenre = () => {
    <form>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" name="" id="" />
        </div>
    </form>
  };
};
