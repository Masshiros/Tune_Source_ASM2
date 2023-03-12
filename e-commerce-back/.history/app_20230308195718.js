// APP
const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const genreRoute = require('./routes/genreRoute');
const expressValidator = require('express-validator');
//MORGAN 
app.use(morgan('dev'));
// body parser
app.use(bodyParser.json());
// cookie parser
app.use(cookieParser());
// express-validator;
app.use(expressValidator());
//AUTH route
app.use("/api",authRoute);
// USER route
app.use("/api",userRoute);
// GENRE route
app.use("/api",userRoute);

module.exports = app;
