const http = require("http");

const server = http.createServer((req, res) => {
	console.log("user hit the server");

	const url = req.url;
	console.log(url);
	if (url === "/") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>Home page</h1>");
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(`<head><link rel="shortcut icon" href="#">
</head>		<h1>About page</h1>`);
		res.end();
	} else {
		//
		// res.writeHead to provide metadata about your response
		// 200 = request is successful
		// you could use 404 for successful request and create confusion so becareful
		// content-type = tell the browser the type of file you are sending to it
		// in this case, html
		res.writeHead(404, { "content-type": "text/html" });

		res.write("<h1>error 404: page not found</h1>");

		// res.end() signals the server's job is done
		// alwars invoke res.end()
		// if data is provided, it's similer to calling res.write()
		// res.end("<h1>Home page</h1>");
		res.end();
	}
});

server.listen(5000);
