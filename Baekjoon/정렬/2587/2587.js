const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(input.reduce((a, b) => a + b, 0) / input.length);
if (input.length % 2 === 0)
  console.log(
    (input.sort((a, b) => a - b)[Math.floor(input.length / 2)] +
      input.sort((a, b) => a - b)[Math.floor(input.length / 2) - 1]) /
      2
  );
else console.log(input.sort((a, b) => a - b)[Math.floor(input.length / 2)]);
