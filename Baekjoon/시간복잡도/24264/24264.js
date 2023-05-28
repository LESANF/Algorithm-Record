const fs = require("fs");
const n = fs.readFileSync("예제.txt").toString().trim();

console.log(`${n * n}\n2`);
