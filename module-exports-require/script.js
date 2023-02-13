// console.log(__dirname);

// const interval = setInterval(() => {
// 	console.log("hello world");
// }, 1000);

// setTimeout(() => {
// 	clearInterval(interval);
// }, 10000);
// module.exports = "hello world";

const { john, peter } = require("./1-names");
const sayHi = require("./5-utils");
const personNames = require("./alt-approach");

console.log(personNames);

sayHi(john);
sayHi(peter);
console.log(module);
