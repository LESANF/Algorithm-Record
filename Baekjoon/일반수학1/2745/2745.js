const fs = require("fs");
const [N, B] = fs.readFileSync("예제.txt").toString().trim().split(" ");

const toAscii = 55;
let ans = 0;

const reverseWord = N.split("").reverse().join("");

for (let i = 0; i < reverseWord.length; i++) {
  if (isNaN(reverseWord[i])) {
    const toNumber = reverseWord[i].charCodeAt() - toAscii;
    ans += toNumber * Math.pow(B, i);
  } else {
    ans += +reverseWord[i] * Math.pow(B, i);
  }
}

console.log(ans);
