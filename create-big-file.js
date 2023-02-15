const fs = require("fs");

for (let i = 0; i < 100000; i++) {
	fs.writeFileSync("./bigger-file.txt", `hello world ${i}\n`, { flag: "a" });
}
