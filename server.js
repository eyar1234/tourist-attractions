const http = require("http");
require("dotenv").config();
const app = require("./app.js");

const server = http.createServer(app);

server.listen(process.env.PORT);
