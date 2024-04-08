const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Home page");
  }

  if (request.url === "/about") {
    response.end("About us page");
  }
});

server.listen(8080, () => {
  console.log("Our server is running very well on port 8080");
});
