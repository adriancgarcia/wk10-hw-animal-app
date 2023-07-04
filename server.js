// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const AnimalRouter = require("./controllers/animal");
const UserRouter = require("./controllers/user");
const methodOverride = require ("method-override");
const session = require('express-session');
const MongoStore = require('connect-mongo');

// MIDDLEWARE /////
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
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

const PORT = process.env.PORT 

// Listener
app.listen(PORT, () => {
    console.log(`Listening on port, ${PORT}`)
})