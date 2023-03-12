const express = require("express");
const router = express.Router();
const {
  findByID
} = require("../Controller/userController");


router.param('userID', use)

module.exports = router;
