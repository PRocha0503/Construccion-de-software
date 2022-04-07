const express = require("express");
const cors = require("cors");
const db = require("../db/connections");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = "/api/user";
		this.dbConnection();
		this.middlewares();
		this.routes();
	}
	async dbConnection() {
		try {
			await db.authenticate();
			console.log("Database connected");
		} catch (e) {
			console.log("Could not connect to database");
			throw new Error(e);
		}
	}
	middlewares() {
		//CORS
		this.app.use(cors());
		//Lectura y Parseo del body
		this.app.use(express.json());
		// Directorio publico
		// this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.usersPath, require("../routes/user"));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log("Servidor corriendo en el puerto ", this.port);
		});
	}
}

module.exports = Server;
