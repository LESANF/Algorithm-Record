const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const a1 = input[0].split(" ")[0];
const b1 = input[0].split(" ")[1];
const a2 = input[1].split(" ")[0];
const b2 = input[1].split(" ")[1];

let initFractionA = a1 * b2 + a2 * b1;
let initFractionB = b1 * b2;

const originA = initFractionB;
const originB = initFractionA;
let A = +originA;
let B = +originB;
let gcd = 0;
let r = 0;
let temp;
while (1) {
  if (A % B === 0) {
    gcd = B;
    break;
  }

  r = A % B;
  A = B;
  B = r;
}

console.log(
  `${Math.round(initFractionA / gcd)} ${Math.round(initFractionB / gcd)}`
);
