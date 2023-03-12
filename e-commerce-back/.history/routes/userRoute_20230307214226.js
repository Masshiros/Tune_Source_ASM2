const express = require("express");
const router = express.Router();
const { getUserByID } = require("../Controller/userController");
const { requireSignin } = require("../Controller/authController");
// get the user profile when there is userID after login
router.get("/secret/:userID", requireSignin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
// param 
router.param("userID", getUserByID);

module.exports = router;
