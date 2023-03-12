
const formidable = require('formidable');
const _ = require('lodash');
const Album = require("../Model/albumModel");
const { errorHandler } = require("../helpers/dbErrorHandler");

// get user information when they log in the website
exports.createNewAlbum = async(req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields , files) => {
        if(err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        let album = new Album(fields);

    })
}
