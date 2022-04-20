const dotenv = require("dotenv");
const Server = require("./models/server");
//Exp: configurar variables de entorno
dotenv.config();

const server = new Server();

server.listen();
