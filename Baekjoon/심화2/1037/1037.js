const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const sortAry = rest[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (sortAry.length === 1) {
  console.log(Math.pow(sortAry[0], 2));
} else {
  console.log(sortAry[0] * sortAry[sortAry.length - 1]);
}
