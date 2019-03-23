const routes = require("express").Router();

routes.get("/", function(req, res) {
   Burgers.findAll().then(function() {
       console
       res.render("index", {burgers: burgers})
       });
   });
module.exports = routes;

