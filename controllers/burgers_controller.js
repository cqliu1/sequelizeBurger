const Burger = require("../models/Burger.js");

const imgURL = "./assets/images/burger.png";

let Router = function(app) {

	app.get("/", function(req,res) {
		Burger.selectAll(function(result) {
			res.render("index",{
				burgers: result,
				imgURL: imgURL
			});
		});
	});

	app.post("/", function(req,res) {
		let newBurger = req.body;
		Burger.insertOne(newBurger, function(result) {
			Burger.selectAll(function(result2) {
				res.render("index",{
					burgers: result2,
					imgURL: imgURL
				});
			});
		});
	});

	app.put("/", function(req,res) {
		let updateBurger = req.body;
		Burger.updateOne(updateBurger, function(result) {
			Burger.selectAll(function(result2) {
				res.render("index",{
					burgers: result2,
					imgURL: imgURL
				});
			});
		})
	});
};

module.exports = Router;