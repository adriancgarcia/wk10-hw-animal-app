require("dotenv").config() 
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
.on("open", () => {console.log("Connect to Mongoose")})
.on("close", () => {console.log("Disonnected from Mongoose")})
.on("error", () => {console.log(error)})


module.exports = mongoose;