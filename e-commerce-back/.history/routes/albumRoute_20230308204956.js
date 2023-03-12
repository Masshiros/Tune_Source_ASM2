const express = require("express");
const router = express.Router();
const {
  createNewAlbum
} = require("../Controller/albumController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
const { getUserByID } = require("../Controller/userController");


router.post("/album/create/:userID", requireSignin, isAuth, isAdmin, createNewGenre);
router.param("userID", getUserByID);

module.exports = router;
