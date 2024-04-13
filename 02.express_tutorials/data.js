const products = [
  {
    id: 1,
    name: "albany sofa",
    image:
      "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    price: 39.95,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 2,
    name: "entertainment center",
    image:
      "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 3,
    name: "albany sectional",
    image:
      "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    price: 10.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
  {
    id: 4,
    name: "leather sofa",
    image:
      "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    price: 9.99,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
  },
];
const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
  { id: 5, name: "emma" },
];
module.exports = { products, people };

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

// const authorized = (request, response, next) => {
//   const user = request.query.user;
//   if (user === "jackpot") {
//     request.doctor = { name: "Erick", username: "Elnino", id: 15 };
//     next();
//   } else {
//     response.status(401).send("UnAuthorizerd");
//   }
// };
// app.use([logData, authorized]);
// app.use(express.json());
// app.use(morgan("tiny"));
// // app.use(express.static("./public"));
// app.get("/", (request, response) => {
//   console.log(request.doctor);
//   response.send("<h1>Home Page </h1>");
// });

// app.get("/about", (request, response) => {
//   response.send("<h1>About us</h1>");
// });
