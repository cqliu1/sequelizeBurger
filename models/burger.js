const orm = require("../config/orm.js");

let Burger = {
	selectAll: orm.selectAll,
	insertOne: orm.insertOne,
	updateOne: orm.updateOne
}

module.exports = Burger;