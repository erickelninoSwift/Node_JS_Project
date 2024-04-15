const express = require("express");
const router = express.Router();

router.post("/", (request, response) => {
  const { name } = request.body;
  if (name) {
    return response.status(200).send(`Welcome back to our channel ${name}`);
  }
  response.status(401).send("Please provide credentials");
});

module.exports = router;
