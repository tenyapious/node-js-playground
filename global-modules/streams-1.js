const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		// const text = fs.readFileSync("./bigger-file.txt");

		const fileStream = fs.createReadStream("./bigger-file.txt", "utf-8");

		fileStream.on("open", () => {
			fileStream.pipe(res);
		});

		fileStream.on("error", (err) => {
			res.end(err);
		});
	})
	.listen(5000);
