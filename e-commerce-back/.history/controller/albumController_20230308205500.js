// if (files.photo) {
//     // console.log("FILES PHOTO: ", files.photo);
//     if (files.photo.size > 1000000) {
//       return res.status(400).json({
//         error: "Image should be less than 1mb in size",
//       });
//     }
//     product.photo.data = fs.readFileSync(files.photo.filepath); // change path to filepath
//     product.photo.contentType = files.photo.mimetype; // change typt to mimetype
//   }
const formidable = require('formidable');
const _ = require('lodash');
const Album = require("../Model/albumModel");
const { errorHandler } = require("../helpers/dbErrorHandler");

// get user information when they log in the website
exports.createNewAlbum = async(req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,)
}
