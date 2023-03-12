// APP
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');

//MORGAN 
app.use(morgan('dev'));
//route
app.use("/api",userRoute);

module.exports = app;
