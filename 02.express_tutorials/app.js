const { products, people } = require("./data");
const express = require("express");
// const logData = require("./logger");
// const morgan = require("morgan");
const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on Server  : ${PORT}`);
});
