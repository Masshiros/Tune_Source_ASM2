const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");


router.post("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);


module.exports = router;
