const User = require("../Model/userModel");

exports.findByID = async( req,res, next ,id) => {
    User.findById
}