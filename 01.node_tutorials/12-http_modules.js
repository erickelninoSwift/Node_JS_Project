const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our Home page");
  }
  if (request.url === "/contact") {
    response.end("This is our Contact page");
  }
});

server.listen(8080);
