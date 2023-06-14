const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, nCards, M, mCards] = input;

const mDic = {};
const ans = [];
const nonDuplicationNcards = new Set(nCards.split(" ").map(Number));

mCards
  .split(" ")
  .map(Number)
  .forEach((value, index) => {
    mDic[index] = value;
  });

for (let value in mDic) {
  if (nonDuplicationNcards.has(mDic[value])) ans.push(1);
  else ans.push(0);
}

console.log(ans.join(" "));
