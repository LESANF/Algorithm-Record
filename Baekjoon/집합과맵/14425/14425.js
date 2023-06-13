const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const sAssemble = {};
const mWords = {};

for (let i = 0; i < input.length; i++) {
  if (i < N) sAssemble[i] = input[i];
  else mWords[i] = input[i];
}

const nonDupSassembleAry = new Set(Object.values(sAssemble));
let ans = 0;

Object.values(mWords).forEach((value) => {
  if (nonDupSassembleAry.has(value)) ans++;
});

console.log(ans);
