const routes = require("express").Router();
const db = require("../models")

//load all burgers
routes.get("/", function(req, res) {
   db.Burgers.findAll({raw: true}).then(function(burgers) {
    //    console.log(burgers)
           res.render("index", {burgers: burgers})
       });
   });

   //Add a burger to the database
routes.post("/api/postburger", function(req, res) {
    // console.log(req.body);
    db.Burgers.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
        eaten: false
    });
    return res.redirect("/");
});

//remove an already eaten burger
routes.post("/api/removeburger", function(req, res) {
    db.Burgers.destroy({where: {id: req.body.id}})
    return res.redirect("/");
});

//mark a burger as being eaten
routes.post("/api/eatburger", function(req, res) {
    // console.log(req.body);
    db.Burgers.update({eaten: true}, {where: {id: req.body.id}})
    return res.redirect("/");
});

module.exports = routes;

