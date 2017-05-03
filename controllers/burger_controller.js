var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log('here');
  // db.burger.findAll({}).then(function(data) {
  //   var hbsObject = {
  //     burgers: data
  //   };
  //   console.log(hbsObject);
  //   res.render("index", hbsObject);
  // });
});

router.post("/", function(req, res) {
  // db.burger.create({name: req.body.name}).then(function(data) {
  //   res.redirect("/");
  // });
});

router.put("/:id", function(req, res) {
  var burgerID = "id = " + req.params.id;

  console.log("condition Burger ID: ", burgerID);

  // db.burger.update( {name: burgerID}).then(function(data) {
  //   console.log('there');
  //   res.redirect("/");

  // });
});

// Export routes for server.js to use.
module.exports = router;
