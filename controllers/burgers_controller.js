var express = require("express");

var router = express.Router();

// brings the burger.js model in
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required
//default and homepage:
router.get("/", function(req, res) {
  burger.all(function(data) {
      //GETS all current burger info and sends it to handlebars
    var hbsObject = {
      allBurgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POSTS new burger to the db
router.post("/api/burgers", function(req, res) {
  burger.create(["name"], [req.body.name], function(result) {
    // sends back the ID of the new burger in JSON format
    res.json({ id: result.insertId });
  });
});

//updates a specific burger's eaten status
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;