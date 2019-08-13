var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// makes the "public" directory available
app.use(express.static("public"));

// parses application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// brings in the routes for the server
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// server starts listening for client requests
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
