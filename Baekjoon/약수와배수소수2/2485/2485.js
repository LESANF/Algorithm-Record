const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const trees = input.map(Number).sort((a, b) => a - b);
const distance = [];

for (let i = 0; i < trees.length - 1; i++)
  distance.push(trees[i + 1] - trees[i]);

let gcd = distance[distance.length - 1];
let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

for (let i = 0; i < distance.length; i++) {
  gcd = getGCD(distance[i], gcd);
}

let ans = 0;

distance.forEach((v) => {
  ans += v / gcd - 1;
});

console.log(ans);
