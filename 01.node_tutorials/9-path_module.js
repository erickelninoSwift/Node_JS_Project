const path = require("path");
// console.log(path.sep);

const filePath = path.join("content/", "subfolder/", "erick.txt");
const base = path.basename(filePath);
console.log(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "erick.txt");

console.log(absolute);
