const express = require("express");
const router = express.Router();
const {
  createNewAlbum,
  getAlbumByID,
  readAlbum,
  removeAlbum,
  updateAlbum,
  listAlbum,
  listRelatedAlbum,
  listGenre,
} = require("../Controller/albumController");
const {
  requireSignin,
  isAdmin,
  isAuth,
} = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

// get Album by ID
router.get("/album/:albumID", readAlbum);
// Create new album
router.post(
  "/album/create/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  createNewAlbum
);
// delete album
router.delete(
  "/album/:albumID/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  removeAlbum
);
// update album
router.put(
  "/album/:albumID/:userID",
  requireSignin,
  isAuth,
  isAdmin,
  updateAlbum
);

// LIST ALBUM (WITH QUERY)
router.get("/album", listAlbum);

//GET related album with current album
router.get("/album/related/:albumID", listRelatedAlbum);

//
router.get("/album/genre", listGenreOfAlbum);

// PARAMS
// get user by id
router.param("userID", getUserByID);

// get album by id
router.param("albumID", getAlbumByID);

module.exports = router;
