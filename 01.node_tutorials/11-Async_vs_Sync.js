// const names = require("./3-modules");

// console.log(names.erick);
// console.log(names.yollande);
// const newWays = require("./6-alternatives");
// require("./7-mindgrenade");
// const { name, age } = newWays.signlePerson;
// console.log(newWays.signlePerson);
// console.log(newWays.items);
// console.log(`My name is ${name}`);
const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const fs = require("fs");

// const first1 = readFileSync("./content/first.txt", "utf8");
// const first2 = readFileSync("./content/second.txt", "utf8");

// console.log(first1, first2);

// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the file results ${first1 + first2}`
// );

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`Error was found ${err.message}`);
    return;
  }

  const data1 = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(`Error was found ${error.message}`);
      return;
    }
    const data2 = result;

    writeFile(
      "./content/result_async.txt",
      `Here is the Async results : ${data1} ,${data2}`,
      (error, result) => {
        if (error) {
          return;
        }
        console.log(result);
      }
    );
  });
});
