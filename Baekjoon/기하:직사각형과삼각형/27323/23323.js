const fs = require("fs");
console.log(
  fs
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .reduce((acc, cur) => acc * cur)
);
