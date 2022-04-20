const { Sequelize } = require("sequelize");

// console.log(process.env.PWD)
const db = new Sequelize("PAS_drummancer", "root", "Kukakala-3", {
  root: "localhost",
  dialect: "mysql",
});

module.exports = db;
