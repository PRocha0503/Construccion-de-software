const { DataTypes } = require("sequelize");
const db = require("../db/connections");

const User = db.define(
	"user",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		class: {
			type: DataTypes.STRING,
		},
		username: {
			type: DataTypes.STRING,
		},
		pwd: {
			type: DataTypes.STRING,
		},
		levels_unlocked: {
			type: DataTypes.INTEGER,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
		tableName: "user",
	}
);

module.exports = User;
