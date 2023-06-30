const express = require("express")
const Animal = require("../models/animal")

// create router
const router = express.Router()

// error handler
// function errorHandler(error, res){
//     res.json(error) 
// }

// ROUTES 
// index route - get - all animals
router.get("/", async (req, res) => {
    const animals = await Animal.find({}).catch((error) => errorHandler(error, res))
    console.log({animals})
    res.render("animal/index.ejs", {animals})
});

// new route - get - new form

// destroy route - DELETE

// Update route - PUT

// Create Route - POST

// Edit route - POST

// Show Route - GET


// EXPORT THE ROUTES
module.exports = router