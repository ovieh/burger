const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burger_controller");

app.use("/", routes);

app.listen(port);

module.exports = dotenv;

