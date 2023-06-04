const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const nonDuplication = [...new Set(input)];

console.log(
  nonDuplication
    .sort((a, b) => {
      if (a.length === b.length) {
        if (a < b) return -1;
        else return 0;
      } else return a.length - b.length;
    })
    .join("\n")
);
