const path = require("path");

// console.log(path.sep);

const filePath = path.join("./content", "text", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "contents", "text", "text.txt");

console.log(absolute);
