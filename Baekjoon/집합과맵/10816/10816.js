const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, nCards, M, mCards] = input;

const nMap = new Map();
const mMap = new Map();
const ans = [];

for (const number of nCards.split(" ")) {
  if (nMap.has(number)) nMap.set(number, nMap.get(number) + 1);
  else nMap.set(number, 1);
}

for (const number of mCards.split(" ")) {
  if (nMap.has(number)) ans.push(nMap.get(number));
  else ans.push(0);
}

console.log(ans.join(" "));
