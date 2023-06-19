const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

const avg = new Map();
avg.set("0", 0);
avg.set("1", 0);
avg.set("2", 0);
avg.set("3", 0);
avg.set("4", 0);

for (let i = 0; i < n; i++) {
  input[i].split(" ").forEach((value, index) => {
    value === "1" && avg.set(index + "", avg.get(index + "") + 1);
  });
}

let student = 0;

// for (let i = 0; i < n; i++) {
//   let cnt = 0;
//   input[i].split(" ").forEach((value, index) => {
//     if (avg.get(index + "") === 1) cnt++;
//   });
// }

console.log(avg);

// const sortedArray = Array.from(avg.entries()).sort((a, b) => b[1] - a[1]);
