const express = require("express");
const router = express.Router();
const {
  getGenreByID,createNewGenre , readGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

// create new genre
router.post("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);
// update new genre
router.put("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);


// get genre
router.get("/genre/:genreID", readGenre)

router.param("userID", getUserByID);
router.param("genreID", getGenreByID);

module.exports = router;
