const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");

input.pop();
for (const value of input) {
  const eachAngle = value
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (eachAngle[0] + eachAngle[1] <= eachAngle[2]) {
    console.log("Invalid");
    continue;
  }

  if (new Set(eachAngle).size === 1) console.log("Equilateral");
  else if (new Set(eachAngle).size === 2) console.log("Isosceles");
  else console.log("Scalene");
}
