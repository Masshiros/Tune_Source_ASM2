const express = require("express");
const router = express.Router();
const {
  findByID
} = require("../Controller/authController");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
