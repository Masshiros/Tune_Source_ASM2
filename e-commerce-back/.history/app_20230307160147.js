// APP
const express = require("express");
const app = express();
const userRoute = require('./routes/user');
app.get("/", (req, res) => {
  res.send("hello from node");
});

module.exports = app;
