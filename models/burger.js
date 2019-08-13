//brings in the DAL to create functions that will interact with the api db
var dal = require("../models/dal.js");

var burger = {
    //takes a callback and calls the all method from the DAL
  all: function(cb) {
    dal.all("burgers", function(res) {
      cb(res);
    });
  },
  // cols and vals are arrays from the db
  create: function(cols, vals, cb) {
    dal.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //to change the eaten status
  update: function(objColVals, condition, cb) {
    dal.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
 
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
