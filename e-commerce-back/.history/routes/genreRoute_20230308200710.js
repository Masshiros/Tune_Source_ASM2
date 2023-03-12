const express = require("express");
const router = express.Router();
const {
  createNewGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");


router.post("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);


module.exports = router;
