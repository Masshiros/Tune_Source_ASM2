const express = require("express");
const router = express.Router();
const {
  getUserByID
} = require("../Controller/userController");


router.param('userID', getUserByID);

module.exports = router;
