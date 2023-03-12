const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

//database
mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useCreateIndex:true
}),then(()=> { 
    console.log();
})

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
