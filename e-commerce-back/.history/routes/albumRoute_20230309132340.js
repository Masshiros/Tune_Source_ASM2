const express = require("express");
const router = express.Router();
const {
  createNewAlbum, getAlbumByID, readAlbum
} = require("../Controller/albumController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

// get Album by ID
router.get("/album/:albumID", readAlbum);
// Create new album 
router.post("/album/create/:userID", requireSignin, isAuth, isAdmin, createNewAlbum);
// delete album
router.delete("/album/:albumID")


// PARAMS
// get user by id 
router.param("userID", getUserByID);

// get album by id
router.param("albumID", getAlbumByID);

module.exports = router;
