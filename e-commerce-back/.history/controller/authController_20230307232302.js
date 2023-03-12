const User = require("../Model/userModel");
const jwt = require("jsonwebtoken"); // generate signed token
const { expressjwt } = require("express-jwt"); // authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    user.salt = undefined;
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
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password don't match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.cookie("jwt", token, { expire: new Date() + 5 * 60 * 1000 });

    const { _id, name, role } = user;

    return res.json({
      token,
      user: { _id, name, email, role },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "User with that email does not exist. Please sign up",
    });
  }
};
exports.signout = async (req, res) => {
  res.clearCookie("jwt");
  res.json({
    message: "Signout successfully",
  });
};
exports.requireSignin = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"], // added later
  userProperty: "auth",
});
exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  
};
