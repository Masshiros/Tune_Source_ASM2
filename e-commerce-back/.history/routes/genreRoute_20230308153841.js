const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);


module.exports = router;
