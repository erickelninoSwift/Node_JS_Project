const { readFile } = require("fs");

const getText = (PATh) => {
  return new Promise((resolve, reject) => {
    readFile(PATh, "utf8", (error, data) => {
      if (error) {
        reject(error.message);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
