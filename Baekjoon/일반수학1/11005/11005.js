const fs = require("fs");
const [N, B] = fs.readFileSync("예제.txt").toString().trim().split(" ");

const toAscii = 55;
let root = +N;
let divideNum = +B;
let quotient = 0;
let ans = [];

const changeAscii = (num) => {
  if (num > 9) return String.fromCharCode(num + toAscii);
  else return num;
};

do {
  if (quotient === 0) {
    ans.push(changeAscii(Math.floor(root % divideNum)));
    quotient = Math.floor(root / divideNum);
  } else {
    ans.push(changeAscii(Math.floor(quotient % divideNum)));
    quotient = Math.floor(quotient / divideNum);
  }
  if (quotient < B) ans.push(changeAscii(quotient));
} while (quotient >= B);

let realAns = ans.reverse();

while (1) {
  if (realAns[0] === 0) realAns.shift();
  else break;
}

console.log(realAns.join(""));
