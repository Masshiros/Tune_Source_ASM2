// APP
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoute');
const expressValidator = require('express-validator');
//MORGAN 
app.use(morgan('dev'));
// body parser
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
// express-validator;
app.use(expressValidator());
//route
app.use("/api",userRoute);

module.exports = app;
