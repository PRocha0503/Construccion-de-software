const { DataTypes } = require("sequelize");
const db = require("../db/connections");

const Game = db.define(
	"game",
	{
		game_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		},
		level_id: {
			type: DataTypes.INTEGER,
			foreignKey: true,
		},
		score: {
			type: DataTypes.INTEGER,
		},
		correct_number_of_notes: {
			type: DataTypes.INTEGER,
		},
		date_played: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
		tableName: "game",
	}
);

module.exports = Game;
