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
    if(!user.authenticate(password)){
        return res.status(401).json({
            error: 'Email and '
        })
    }
    // generate signed token with user id and secret
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    // persist the token in cookie with expire date
    res.cookie("jwt", token, { expire: new Date() + 5*60*1000 });
    // return res with user and token
    const { _id, name, email, role } = user;
    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};
