const fs = require("fs");
const input = +fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

let satanNum = 666;
let cnt = 1;

while (cnt !== +input) {
  satanNum++;
  if ((satanNum + "").includes("666")) cnt++;
}

console.log(satanNum);
