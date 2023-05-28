const fs = require("fs");
const [a, c, n0] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

let flag = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;

const a1 = +a.split(" ")[0];
const a0 = +a.split(" ")[1];

const fFunc = (n) => a1 * n + a0;
const gFunc = (n) => c * n0;

if (fFunc(n0) <= gFunc(n0)) flag = 1;
if (c >= 1 && c <= 100) flag2 = 1;
if (n0 >= 1 && n0 <= 100) flag3 = 1;
if (c >= a1) flag4 = 1;

if (flag === 1 && flag2 && flag3 === 1 && flag4 === 1) console.log(1);
else console.log(0);
