const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DB, "root", process.env.PWD, {
	root: "localhost",
	dialect: "mysql",
});

module.exports = db;
