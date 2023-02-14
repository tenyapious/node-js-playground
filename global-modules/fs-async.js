const fs = require("fs");

// Callback hell straight ahead
fs.readFile("./text.txt", "utf-8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	const text1 = result;

	fs.readFile("./text-2.txt", "utf-8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const text2 = result;

		fs.writeFile(
			"./text1-n-2.txt",
			`This is a combination of text 1 and text 2: ${text1}, ${text2}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log("Done!");
			}
		);
	});
});
