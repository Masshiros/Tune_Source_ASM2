const mongoose = require('mongoose');
const dotenv = require('dotenv');


const PORT = process.env.PORT || 2607;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});