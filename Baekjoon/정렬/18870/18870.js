const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const posList = input[0].split(" ").map(Number);
const nonDuplication = [...new Set(posList)].sort((a, b) => a - b);

const lowerBound = (value) => {
  let [start, end] = [0, N];

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nonDuplication[mid] < value) start = mid + 1;
    else end = mid;
  }

  return start;
};

console.log(posList.map((v) => lowerBound(v)).join(" "));
