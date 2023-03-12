const express = require("express");
const router = express.Router();
const {
  getUserByID
} = require("../Controller/userController");

router.get('/secret/userID')
router.param('userID', getUserByID);

module.exports = router;
