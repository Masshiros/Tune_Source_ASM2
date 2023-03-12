const User = require("../Model/userModel");
const jwt = require("jsonwebtoken"); // generate signed token
const { expressjwt } = require("express-jwt"); // authorization check
const { errorHandler } = require("../helpers/dbErrorHandler");
exports.findByID = 