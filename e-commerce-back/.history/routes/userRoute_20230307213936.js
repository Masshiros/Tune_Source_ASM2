const express = require("express");
const router = express.Router();
const { getUserByID } = require("../Controller/userController");
const {requireSignin} = require("../Controller/authController")

router.get("/secret/:userID", requireSigin);
router.param("userID", getUserByID);

module.exports = router;
