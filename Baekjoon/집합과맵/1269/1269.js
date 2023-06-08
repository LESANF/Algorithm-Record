const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [aCount, bCount] = input.shift().split(" ").map(Number);

const ary = [
  ...new Set([
    ...input[0].split(" ").map(Number),
    ...input[1].split(" ").map(Number),
  ]),
];

let ans = ary.length;

const ansDic = {};
const aDic = {};
const bDic = {};

ary.forEach((value, index) => (ansDic[value] = index));
input[0]
  .split(" ")
  .map(Number)
  .forEach((value, index) => (aDic[value] = index));
input[1]
  .split(" ")
  .map(Number)
  .forEach((value, index) => (bDic[value] = index));

for (let value in aDic) {
  if (value in bDic) ans--;
}

console.log(ans);
