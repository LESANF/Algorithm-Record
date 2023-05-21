const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let maxNum = Number.MIN_SAFE_INTEGER;
let [row, col] = [0, 0];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] > maxNum) {
      row = i + 1;
      col = j + 1;
      maxNum = input[i][j];
    }
  }
}

console.log(`${maxNum}\n${row} ${col}`);
