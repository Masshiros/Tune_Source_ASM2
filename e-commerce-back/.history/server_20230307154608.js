const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
