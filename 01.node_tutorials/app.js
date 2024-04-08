const { createReadStream } = require("fs");

const stream = createReadStream("./content/big_file.txt", {
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error.message);
});
