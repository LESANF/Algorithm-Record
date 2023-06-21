const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

const N = +input;
const sqrtN = Math.floor(Math.sqrt(N));
console.log(sqrtN);
