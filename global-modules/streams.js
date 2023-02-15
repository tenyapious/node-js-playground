const fs = require("fs");

// const stream = fs.createReadStream("./big-file.txt");
const stream = fs.createReadStream("./big-file.txt", {
	highWaterMark: 9000,
	encoding: "utf-8",
});

stream.on("data", (result) => {
	console.log(result);
});

stream.on("error", (error) => {
	console.log(error);
});
