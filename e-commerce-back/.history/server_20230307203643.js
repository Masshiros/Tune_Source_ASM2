const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

//database
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ecommerceapi.8usyoap.mongodb.net/ECommerce?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    
}).then(()=> { 
    console.log("DB connected");
})

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
