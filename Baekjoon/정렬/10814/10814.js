const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

console.log(
  input
    .sort((a, b) => {
      const ageA = +a.split(" ")[0];
      const nameA = a.split(" ")[1];
      const ageB = +b.split(" ")[0];
      const nameB = b.split(" ")[1];

      if (ageA === ageB) {
        return nameA - nameB;
      } else {
        return ageA - ageB;
      }
    })
    .join("\n")
);
