const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { userSignupValidator } = require("../validator");

router.post("/genre/create", createNewGenre);


module.exports = router;
