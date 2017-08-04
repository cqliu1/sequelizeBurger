// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    connection.query(s, [
      burger.burger_name, false
    ], function(err, result) {
      if(err) throw err;
      callback(result);

    });
  },

  updateOne: function(burger, callback) {
    var s = "UPDATE " + tableName + " SET devoured = true WHERE ?";
    console.log("Devouring burger with id:",burger.id);
    connection.query(s,
      { id: burger.id}, function(err, result) {
      if(err) throw err;
      callback(result);

    });
  }

};

module.exports = orm;
