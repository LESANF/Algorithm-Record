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

const getGcd = (a, b) => {
  let aF = a;
  let bF = b;
  while (1) {
    const r = aF % bF;
    if (r === 0) return bF;
    aF = bF;
    bF = r;
  }
};

for (let i = 0; i < distance.length - 1; i++) {
  let a = 0;
  let b = 0;
  if (distance[i + 1] > distance[i]) {
    a = distance[i + 1];
    b = distance[i];
    const newGcd = getGcd(a, b);
    if (gcd > newGcd) gcd = newGcd;
  } else {
    a = distance[i];
    b = distance[i + 1];
    const newGcd = getGcd(a, b);
    if (gcd > newGcd) gcd = newGcd;
  }
}

const getTreeCnt = (a, t, d) => {
  const left = trees[trees.length - 1] - trees[0];
  const leftDivide = left / gcd;
  return leftDivide + 1;
};

console.log(getTreeCnt(trees[trees.length - 1], trees[0], gcd) - trees.length);
