const { Sequelize } = require("sequelize");

const db = new Sequelize("PAS_drummancer", "root", "123", {
	root: "localhost",
	dialect: "mysql",
});

module.exports = db;
