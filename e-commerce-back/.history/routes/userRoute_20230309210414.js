const express = require("express");
const router = express.Router();
const { getUserByID } = require("../Controller/userController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
// get the user profile when there is userID after login
router.get("/secret/:userID", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});


// param "userID" exist -> call middleware getUserByID
router.param("userID", getUserByID);

module.exports = router;
