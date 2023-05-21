const fs = require("fs");
const input = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

let maxLen = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < input.length; i++) {
  if (input[i].length > maxLen) maxLen = input[i].length;
}

const row = 5;
let ans = "";
for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < row; j++) {
    if (input[j][i] !== undefined) ans += input[j][i];
  }
}

console.log(ans);
