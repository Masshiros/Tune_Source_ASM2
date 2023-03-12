// APP
const express = require("express");
const app = express();
const user = require('/')
app.get("/", (req, res) => {
  res.send("hello from node");
});

module.exports = app;
