const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const db = new Sequelize(
	process.env.DATABASE,
	process.env.DBUSER,
	process.env.PASSWORD,
	{
		root: "localhost",
		dialect: "mysql",
	}
);

module.exports = db;
