const fs = require("fs");
const n = BigInt(fs.readFileSync("예제.txt").toString().trim());

console.log(`${n * n * n}\n3`);
