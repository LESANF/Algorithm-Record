const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n").map(Number);

const equilTriangle = input.filter((angle) => angle === 60);
let sameTwoAngle = false;

if (equilTriangle.length === 3) console.log("Equilateral");
else {
  if (input.reduce((acc, cur) => acc + cur, 0) === 180) {
    if (new Set([...input]).size === 2) console.log("Isosceles");
    else console.log("Scalene");
  } else {
    console.log("Error");
  }
}
