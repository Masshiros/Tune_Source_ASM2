const formidable = require("formidable");
const _ = require("lodash");
const fs = require('fs');
const Album = require("../Model/albumModel");
const { errorHandler } = require("../helpers/dbErrorHandler");

// get user information when they log in the website
exports.createNewAlbum = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    let album = new Album(fields);
    if (files.photo) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      album.photo.data = fs.readFileSync(files.photo.filepath); 
      album.photo.contentType = files.photo.mimetype; 
    }
    try{

       await  album.save()
    }catch(err){
        if(err)
    }
  });
};
