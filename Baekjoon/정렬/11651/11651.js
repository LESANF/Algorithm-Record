const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const sortYinput = input.sort((a, b) => {
  const ay = +a.split(" ")[1];
  const by = +b.split(" ")[1];
  return ay - by;
});

const sortXinput = sortYinput.sort((a, b) => {
  const ax = +a.split(" ")[0];
  const bx = +b.split(" ")[0];
  const ay = +a.split(" ")[1];
  const by = +b.split(" ")[1];

  if (ay <= by) {
    return ax - bx;
  }
});

console.log(sortXinput.join("\n"));
