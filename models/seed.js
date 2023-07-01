const mongoose = require("./connection");
const Animal = require("./animal");

mongoose.connection.on('open', async () => {

    // 1. create entries into the db using the allAnimals
    // 1a. in order to do this we need to delete everything
    await Animal.deleteMany();

    // 1b. then using allAnimals, we will insert that into the db.
    const allAnimals = [
        {name: 'Dog', img: "https://i.imgur.com/iRADEag.jpeg", species: 'Canine', location: 'global', lifeExpectancy: 10, extinct: false},
        
        {name: 'Cat', img: "https://i.imgur.com/9qBZMdF.jpeg",  species: 'Feline', location: 'global', lifeExpectancy: 15, extinct: false},
        
        {name: 'Giant Panda', img: "https://i.imgur.com/Kg6pxB4.jpeg", species: 'Ursidae', location: 'China', lifeExpectancy: 20, extinct: false},
        
        {name: 'Western Black Rhinoceros', img: "https://media.savetherhino.org/prod/uploads/2018/05/Parsaloi1.jpg", species: 'Diceros bicornis longpipes', extinct: true, location: 'Southeast region of Africa', lifeExpectancy: 40, extinct: false},
        
        {name: 'Polar Bear', img: "https://i.imgur.com/esC7HQg.jpeg", species: 'Ursus Maritimus', location: 'Arctic Circle', lifeExpectancy: 30, extinct: false},
    ];
    await Animal.create(allAnimals);

    // 2. we are going to close the connection
    mongoose.connection.close();
});