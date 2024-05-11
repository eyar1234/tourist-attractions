const https = require("https");
const fs = require("fs");
require("dotenv").config();
const app = require("./app.js");

// Load SSL certificate and key
const options = {
  key: fs.readFileSync("key.pem"), // Path to your private key file
  cert: fs.readFileSync("cert.pem"), // Path to your certificate file
  // If you have an intermediate certificate, include it as well
  // ca: fs.readFileSync("path/to/intermediate-certificate.pem")
};

const server = https.createServer(options, app);

server.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
