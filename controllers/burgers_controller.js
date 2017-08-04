const db = require("../models");

const imgURL = "./assets/images/burger.png";

let Router = function(app) {

	app.get("/", function(req,res) {
		db.Burger.findAll().then(result => {
			res.render("index",{
				burgers: result,
				imgURL: imgURL
			});	
		});
	});

	app.post("/", function(req,res) {
		let newBurger = req.body;

		db.Burger.create({
			burger_name: newBurger.burger_name,
			devoured: false
		}).then(db.Burger.findAll().then(result => {
				res.render("index",{
					burgers: result,
					imgURL: imgURL
				});	
			});
		);
	});

	app.put("/", function(req,res) {
		let updateBurger = req.body;
		db.Burger.update({
			burger_name: newBurger.burger_name,
			devoured: true
		}, {
			where: {
				id: updateBurger.id
			}
		}).then(db.Burger.findAll().then(result => {
				res.render("index",{
					burgers: result,
					imgURL: imgURL
				});	
			});
		);
	});
};

module.exports = Router;