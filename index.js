const http = require('node:http');
const dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = require("./src/database/connect");

connectToDatabase();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(process.env.SERVER_PORT, process.env.SERVER_HOSTNAME, () => {
  console.log(`Server running at http://${process.env.SERVER_HOSTNAME}/`);
});