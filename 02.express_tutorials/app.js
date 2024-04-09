const http = require("http");

const server = http.createServer((request, response) => {
  response.end("<h1>Welcome to our Website </h1>");
});

server.listen(8080, () => {
  console.log("Server is running well");
});
