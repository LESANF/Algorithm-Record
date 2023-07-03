const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let board = Array.from({ length: Math.max(...rest) + 1 }).fill(true);
for (let y = 2; y <= Math.floor(Math.sqrt(Math.max(...rest))); y++) {
  for (let z = 2; z * y <= Math.max(...rest); z++) {
    board[z * y] = false;
  }
}

board[0] = false;
board[1] = false;

let result = "";

rest.forEach((value) => {
  let cnt = 0;
  for (let i = 2; i <= value / 2; i++) {
    if (board[i] && board[value - i]) cnt++;
  }

  result += `${cnt}\n`;
});

console.log(result);
