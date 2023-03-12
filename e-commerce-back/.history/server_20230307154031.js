const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');
const PORT = process.env.PORT || 800;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});