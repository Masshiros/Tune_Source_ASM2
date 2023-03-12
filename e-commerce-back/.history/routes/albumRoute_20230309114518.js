const express = require("express");
const router = express.Router();
const {
  createNewAlbum, getAlbumByID
} = require("../Controller/albumController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

router.get("/album/:albumID")
router.post("/album/create/:userID", requireSignin, isAuth, isAdmin, createNewAlbum);
router.param("userID", getUserByID);
router.param("albumID", getAlbumByID);

module.exports = router;
