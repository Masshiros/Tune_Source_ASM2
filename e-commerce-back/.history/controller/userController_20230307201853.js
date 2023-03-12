const User = require("../Model/userModel");
const jwt = require("jsonwebtoken"); // generate signed token
const expressJWT = require("express-jwt"); // authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.halt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  } catch (err) {
    res.status(400).json({
      error: errorHandler(err),
    });
  }
};
exports.signin = async (req, res) => {
  // find the user based on email
  const { email, password } = req.body;
  await User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that email does not exist. Please sign up",
      });
    }
    // if user is found, check if email and password match
    
    // generate signed token with user id and secret
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    // persist the token in cookie with expire date
  });
};
