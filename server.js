// Dependencies
require("dotenv").config
const express = require("express");
const morgan = require("morgan");
const methodOverride = require ("method-override");
const AnimalRouter = require("./controllers/animal")
const UserRouter = require('./controllers/user');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

const PORT = process.env.PORT 

// MIDDLEWARE /////
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static("public"));

app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true, 
    resave: false,
}));

app.use("/animals", AnimalRouter);
app.use("/user", UserRouter);

app.get('/', (req, res) => {
    res.render('index.ejs')
});


// Listener
app.listen(PORT, () => {
    console.log(`Listening on port, ${PORT}`)
})