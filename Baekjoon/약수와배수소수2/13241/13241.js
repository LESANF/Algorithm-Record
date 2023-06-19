const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ");

const originA = +input.sort()[1];
const originB = +input.sort()[0];
let A = +input.sort()[1];
let B = +input.sort()[0];
let gcd = 0;
let flag = true;
let temp = 0;

const getGcd = (A, B) => {
  // console.log(A, B, Math.floor(A / B), Math.floor(A % B));
  return { divide: Math.floor(A / B), rest: Math.floor(A % B) };
};

while (flag) {
  if (getGcd(A, B).rest === 0) {
    gcd = B;
    flag = false;
  } else {
    temp = B;
    B = getGcd(A, B).rest;
    A = temp;
  }
}

console.log((originA * originB) / gcd);
