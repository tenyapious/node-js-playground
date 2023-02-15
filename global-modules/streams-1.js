const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		// const text = fs.readFileSync("./bigger-file.txt");

		const fileStream = fs.createReadStream("./bigger-file.txt", "utf-8");

		// the pipe method pushes the read stream into write stream
		fileStream.on("open", () => {
			fileStream.pipe(res);
		});
		// the response object can be setup as a writeable object and so no need for res.end()

		fileStream.on("error", (err) => {
			res.end(err);
		});
	})
	.listen(5000);
