const http = require("http");

const hostname = "localhost";
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Olá Mundo!\nIniciando com NodeJs...");
});

module.exports = {
  server,
  hostname,
  port
};