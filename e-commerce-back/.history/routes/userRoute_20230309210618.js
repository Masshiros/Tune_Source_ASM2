const express = require("express");
const router = express.Router();
const { getUserByID , readUser, updateUser} = require("../Controller/userController");
const { requireSignin, isAdmin , isAuth } = require("../Controller/authController");
// get the user profile when there is userID after login
router.get("/secret/:userID", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});
// get user profile
router.get('/user/:userID',requireSignin, isAuth, readUser);
// update user profile
router.put('/user/:userID',requireSignin, isAuth, updateUser);

// param "userID" exist -> call middleware getUserByID
router.param("userID", getUserByID);

module.exports = router;
