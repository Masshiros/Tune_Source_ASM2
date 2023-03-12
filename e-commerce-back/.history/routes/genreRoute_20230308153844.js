const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { userSignupValidator } = require("../validator");

router.post("/genre", userSignupValidator, signup);


module.exports = router;
