// APP
const express = require("express");
const app = express();
const userRoute = require('./routes/userRoute');
const userController = require('./')

//route
app.use("/api",userRoute);

module.exports = app;
