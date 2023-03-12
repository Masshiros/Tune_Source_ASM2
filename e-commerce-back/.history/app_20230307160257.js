// APP
const express = require("express");
const app = express();
const userRoute = require('./routes/user');

//route
app.use("api",userRoute);

module.exports = app;
