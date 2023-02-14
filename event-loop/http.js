const http = require("http");

const server = http.createServer((req, res) => {
	console.log("request event");
	res.end("Hello world");
});

// sever.listen() is an async function
// sitting in the callback queue
// listening for requests
server.listen(5000, () => {
	console.log("Server listening on port: 5000....");
});
