const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");


router.post("/genre/create", createNewGenre);


module.exports = router;
