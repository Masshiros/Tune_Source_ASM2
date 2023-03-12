// APP
const express = require("express");
const app = express();
const morgan = require('morgan')
const userRoute = require('./routes/userRoute');


//route
app.use("/api",userRoute);

module.exports = app;
