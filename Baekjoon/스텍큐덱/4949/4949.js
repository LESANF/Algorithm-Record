const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const END_FLAG = ".";
const SQUARE_BRACKET = {
  LEFT: "[",
  RIGHT: "]",
};
const PARENTHESIS_BRACKET = {
  LEFT: "(",
  RIGHT: ")",
};
const answer = [];

input.forEach((sentence) => {
  let balanceChecker = true;
  let balanceArray = [];

  if (sentence.length === 1 && sentence[0] === END_FLAG) return;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === END_FLAG) break;
    if (char === SQUARE_BRACKET.LEFT || char === PARENTHESIS_BRACKET.LEFT) {
      balanceArray.push(char);
    } else if (char === SQUARE_BRACKET.RIGHT) {
      if (balanceArray.pop() !== SQUARE_BRACKET.LEFT) {
        balanceChecker = false;
        break;
      }
    } else if (char === PARENTHESIS_BRACKET.RIGHT) {
      if (balanceArray.pop() !== PARENTHESIS_BRACKET.LEFT) {
        balanceChecker = false;
        break;
      }
    }
  }

  if (balanceChecker && balanceArray.length === 0) {
    answer.push("yes");
  } else {
    answer.push("no");
  }
});

console.log(answer.join("\n"));
