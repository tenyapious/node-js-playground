const fs = require("fs");

fs.writeFileSync("text-2.txt", "hello world in text 2 file");

fs.writeFileSync(
	"text-2.txt",
	"how are liking it motherf*kerr (in Rick's voice)",
	{
		flag: "a",
	}
);

const text = fs.readFileSync("./text.txt", "utf-8");

console.log(text);
