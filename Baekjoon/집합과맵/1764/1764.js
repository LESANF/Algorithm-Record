const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ans = [];
const noneHear = new Set(input.slice(1, N + 1));
const noneSee = new Set(input.slice(N + 1));

if (noneHear.size < noneSee.size) {
  [...new Set(input.slice(N + 1))].forEach((value) => {
    if (noneHear.has(value)) ans.push(value);
  });
} else {
  [...new Set(input.slice(1, N + 1))].forEach((value) => {
    if (noneSee.has(value)) ans.push(value);
  });
}

console.log(`${ans.length}\n${ans.sort().join("\n")}`);
