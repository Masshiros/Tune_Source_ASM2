const express = require("express");
const router = express.Router();
const {
  createNewAlbum, getAlbumByID, readAlbum
} = require("../Controller/albumController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");

router.get("/album/:albumID", readAlbum);
router.post("/album/create/:userID", requireSignin, isAuth, isAdmin, createNewAlbum);
router.delete("/album/delete")
router.param("userID", getUserByID);
router.param("albumID", getAlbumByID);

module.exports = router;
