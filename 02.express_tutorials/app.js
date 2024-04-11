// const http = require("http");
// const { readFileSync } = require("fs");

// const homePage = readFileSync("./navbar-app/index.html", "utf8");
// const homeStyle = readFileSync("./navbar-app/styles.css", "utf8");
// const homeLogo = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js", "utf8");

// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.writeHead(200, {
//       "content-type": "text/html",
//     });

//     response.write(homePage);
//     response.end();
//   } else if (request.url === "/styles.css") {
//     response.writeHead(200, {
//       "content-type": "text/css",
//     });
//     response.end(homeStyle);
//   } else if (request.url === "/browser-app.js") {
//     response.writeHead(200, {
//       "content-type": "text/script",
//     });
//     response.end(homeLogic);
//   } else if (request.url === "/logo.svg") {
//     response.writeHead(200, {
//       "content-type": "image/svg+xml",
//     });
//     response.end(homeLogo);
//   }
//   console.log(request.url);
// });

// server.listen(8080, () => {
//   console.log("Server is running well");

// });

const { products, people } = require("./data");
const express = require("express");

const PORT = 8080;
const app = express();

// app.use(express.json());
app.get("/", (request, response) => {
  response.send("<h1>Home Page </h1> <a href='/api/products'>product</a>");
});

// app.get("/api/products", (request, response) => {
//   const newproducts = products.map((product) => {
//     const { id, name, image } = product;
//     return {
//       id,
//       name,
//       image,
//     };
//   });

// app.get("/api/products/:id", (request, response) => {
//   const { id } = request.params;
//   console.log(request.params);
//   const productSelected = products.find((product) => product.id === Number(id));
//   if (!productSelected) {
//     response.status(404).send("Product was not found ");
//   }
//   return response.json(productSelected);
// });

app.get("/api/products/:productID/review/:reviewID", (request, response) => {
  const { productID, reviewID } = request.params;

  const productSelected = products.find((product) => product.id === Number(id));
  if (!productSelected) {
    response.status(404).send("Product was not found ");
  }
  return response.json(productSelected);
});

app.get("/api/v1/query", (request, response) => {
  console.log(request.query);
  const selectedData = [...products];
  console.log(selectedData);
  const { name, limit } = request.query;
  const soetedSelcted = selectedData.filter((datafetched) => {
    return datafetched.name.startsWith(name);
  });

  if (limit) {
    const sortedWithLimit = soetedSelcted.slice(0, Number(limit));
    response.status(200).json(sortedWithLimit);
  } else {
    response.status(200).json(soetedSelcted);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Server  : ${PORT}`);
});
