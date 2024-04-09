const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html", "utf8");
const homeStyle = readFileSync("./navbar-app/styles.css", "utf8");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js", "utf8");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, {
      "content-type": "text/html",
    });

    response.write(homePage);
    response.end();
  } else if (request.url === "/styles.css") {
    response.writeHead(200, {
      "content-type": "text/css",
    });
    response.end(homeStyle);
  } else if (request.url === "/browser-app.js") {
    response.writeHead(200, {
      "content-type": "text/script",
    });
    response.end(homeLogic);
  } else if (request.url === "/logo.svg") {
    response.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    response.end(homeLogo);
  }
  console.log(request.url);
});

server.listen(8080, () => {
  console.log("Server is running well");
});
