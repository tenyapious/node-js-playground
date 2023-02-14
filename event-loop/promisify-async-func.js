const fs = require("fs").promises;
const path = require("path");
const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// const getText = (filePath) => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(filePath, "utf-8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// getText(path.join("global-modules", "text1-n-2.txt"))
// 	.then((respond) => {
// 		console.log(respond);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// using async
const start = async () => {
	try {
		const first = await fs.readFile(
			path.join("global-modules", "text.txt"),
			"utf-8"
		);

		await fs.writeFile("./event-loop/texts-1.txt", first);

		const second = await fs.readFile(
			path.join("global-modules", "text-2.txt"),
			"utf-8"
		);

		await fs.writeFile("./event-loop/texts-1.txt", second, { flag: "a" });

		const texts = await fs.readFile("./event-loop/texts-1.txt", "utf-8");

		console.log(texts);
	} catch (error) {
		console.log(error);
	}
};

start();
