const { DataTypes } = require("sequelize");
const db = require("../db/connections");

const Level = db.define(
  "level",
  {
    level_number: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
    },
    difficulty: {
      type: DataTypes.SMALLINT,
    },
    total_number_of_notes: {
      type: DataTypes.SMALLINT,
    },
    max_possible_score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "level",
  }
);

module.exports = Level;
