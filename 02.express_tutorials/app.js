const express = require("express");
// const logData = require("./logger");
// const morgan = require("morgan");
const { myPeopleRoute } = require("./routes/people");
const authentication = require("./routes/authentication");
const PORT = 8080;
const app = express();

app.use(express.static("./methods-public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use("/login", authentication);
app.use("/api/people", myPeopleRoute);
app.listen(PORT, () => {
  console.log(`Server is running on Server  : ${PORT}`);
});
