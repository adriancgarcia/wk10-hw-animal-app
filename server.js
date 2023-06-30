// Dependencies
require("dotenv").config
const express = require("express");
const morgan = require("morgan");
const methodOverride = require ("method-override");
const AnimalRouter = require("./controllers/animal") 

const app = express();

const PORT = process.env.PORT 

// MIDDLEWARE /////
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"));

app.use("/animal", AnimalRouter);


// Listener
app.listen(PORT, () => {
    console.log(`Listening on port, ${PORT}`)
})