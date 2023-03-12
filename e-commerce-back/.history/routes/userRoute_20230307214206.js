const express = require("express");
const router = express.Router();
const { getUserByID } = require("../Controller/userController");
const { requireSignin } = require("../Controller/authController");
// get the user 
router.get("/secret/:userID", requireSignin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
router.param("userID", getUserByID);

module.exports = router;
