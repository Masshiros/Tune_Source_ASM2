const express = require("express");
const router = express.Router();
const {
  getGenreByID,createNewGenre , readGenre, updateGenre
} = require("../Controller/genreController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

// create new genre
router.post("/genre/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);
// update new genre
router.put("/genre/:genreID/:userID", requireSignin, isAuth, isAdmin, updateGenre);
// update new genre
router.put("/genre/:genreID/:userID", requireSignin, isAuth, isAdmin, updateGenre);


// get genre
router.get("/genre/:genreID", readGenre)

router.param("userID", getUserByID);
router.param("genreID", getGenreByID);

module.exports = router;
