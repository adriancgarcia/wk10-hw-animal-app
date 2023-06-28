require("dotenv").config
const express = require('express');
const morgan = require('morgan');
const methodOverride = require ("method-override");


const app = express();
const PORT = process.env.PORT

// MIDDLEWARE /////
app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))


// ROUTES ///////
app.get("/", (req, res) => {
    res.send("server is working")
})
  



app.listen(3003, () => {
    console.log("listening on port, 3003")
})