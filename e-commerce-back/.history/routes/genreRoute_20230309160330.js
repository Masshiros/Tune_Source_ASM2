const express = require("express");
const router = express.Router();
const {
  getGenreByID,
  createNewGenre,
  readGenre,
  updateGenre,
  removeGenre,
} = require("../Controller/genreController");
const {
  requireSignin,
  isAdmin,
  isAuth,
} = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

// create new genre
router.post(
  "/genre/create/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  createNewGenre
);
// update new genre
router.put(
  "/genre/:genreID/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  updateGenre
);
// delete  genre
router.put(
  "/genre/:genreID/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  removeGenre
);

// get genre
router.get("/genre/:genreID", readGenre);
// list genre
router.get("/genre")
router.param("userID", getUserByID);
router.param("genreID", getGenreByID);

module.exports = router;
