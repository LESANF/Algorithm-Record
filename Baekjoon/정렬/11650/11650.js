const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const sortXinput = input.sort((a, b) => {
  const ax = +a.split(" ")[0];
  const bx = +b.split(" ")[0];
  return ax - bx;
});

const sortYinput = sortXinput.sort((a, b) => {
  const ax = +a.split(" ")[0];
  const bx = +b.split(" ")[0];
  const ay = +a.split(" ")[1];
  const by = +b.split(" ")[1];

  if (ax <= bx) {
    return ay - by;
  }
});

console.log(sortYinput.join("\n"));
