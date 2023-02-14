const http = require("http");

const server = http.createServer((req, res) => {
	// res.write("Hello world, how do you like this server?\n");

	if (req.url === "/") {
		res.end("Welcome to the homepage");
	}

	if (req.url === "/about") {
		res.end("Welcome to the about page");
	}

	res.end(
		`<h2>Looks like you're lost mate! Neeed some pointers? </h2><a href='/'>home</a>`
	);
});

server.listen(5000);
