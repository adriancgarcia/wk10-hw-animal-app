const express = require("express");
const Animal = require("../models/animal");

// create router
const router = express.Router();

router.use((req, res, next) => {
    req.session
    if(req.session.loggedIn){
        next();
    }else{
        res.redirect('/user/login')
    }
})

// ROUTES 
// index route - get - all animals
router.get("/", async (req, res) => {
    const allAnimals = await Animal.find({ username: req.session.username })
    // console.log({animals})
    res.render(
        "animal/index.ejs", 
        { animals: allAnimals, 
            user: req.session.username }
        )
});

// new route - get - new form
router.get("/new", async (req, res) => {
    await res.render("animal/new.ejs")
});

// destroy route - DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Animal.findByIdAndDelete(id);
    res.redirect("/animals")
});

// Update route - PUT
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    await Animal.findByIdAndUpdate(id, req.body)
    res.redirect("/animals");
});

// Create Route - POST
router.post("/", async (req, res) => {
        if(req.body.extinct === 'on') {
            req.body.extinct = true; 
        }else {
            req.body.extinct = false;
        }
        req.body.username = req.session.username;
        req.body 
        await Animal.create(req.body);
        res.redirect("/animals");
});    

// Edit route - POST
router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    res.render('animal/edit.ejs', { animal })
});

// Show Route - GET
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    res.render("animal/show.ejs", { animal })
});

// EXPORT THE ROUTES
module.exports = router;