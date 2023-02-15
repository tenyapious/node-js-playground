const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// listen for event before emitting

customEmitter.on("response", () => {
	console.log(`Example of a custom event`);
});

customEmitter.on("response", (text) => {
	console.log(`Data recieved ${text}`);
});

setTimeout(() => {
	customEmitter.emit("response", "in 5s");
}, 3000);
