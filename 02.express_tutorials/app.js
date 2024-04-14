const { products, people } = require("./data");
const express = require("express");
// const logData = require("./logger");
// const morgan = require("morgan");
const PORT = 8080;
const app = express();

app.use(express.static("./methods-public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.get("/api/people", (request, response) => {
  response.status(200).send({
    success: true,
    data: people,
  });
});

app.post("/login", (request, response) => {
  const { name } = request.body;

  if (name) {
    return response.status(200).json({
      name: name,
    });
  }

  response.send("Please do provide the credentials");
});

app.listen(PORT, () => {
  console.log(`Server is running on Server  : ${PORT}`);
});
