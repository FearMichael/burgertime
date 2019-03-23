const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models")
const htmlRoutes = require("./controller/controller.js")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory to be served
app.use(express.static('./public/'));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", htmlRoutes)


db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on port ${PORT}`);
    });
});