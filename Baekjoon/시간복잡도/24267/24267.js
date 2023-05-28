const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

console.log(`${(BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6)}\n3`);
