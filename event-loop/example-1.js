const fs = require("fs");
const path = require("path");

console.log("started a first task");

fs.readFile(
	path.join("global-modules", "text1-n-2.txt"),
	"utf-8",
	(err, result) => {
		if (err) {
			console.log(err);
			return;
		}

		console.log(result);
		console.log("completed reading file");
	}
);

console.log("starting last task");
