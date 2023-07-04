const mongoose = require("./connection");

// ANIMAL SCHEMA goes into model
const animalSchema = new mongoose.Schema({
    name: String, 
    img: String,
    species: String,  
    location: String, 
    lifeExpectancy: Number, 
    extinct: Boolean,
    username: String,
    });

// ANIMAL MODEL
 const Animal = mongoose.model("animal", animalSchema) // name is always singular and capital letter.

//  EXPORT ANIMAL MODEL
module.exports = Animal;