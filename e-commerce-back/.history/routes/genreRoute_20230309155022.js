const express = require("express");
const router = express.Router();
const {
  getGenreByID,createNewGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");


router.post("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);
router.param("userID", getUserByID);
router.param("genreID", getGenreByID);

module.exports = router;
