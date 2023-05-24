const fs = require("fs");
const input = +fs.readFileSync("예제.txt").toString().trim();

let ans = 2;
for (let i = 0; i < input; i++) ans = ans + (ans - 1);

console.log(Math.pow(ans, 2));
