const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const ans = [];

input.forEach((value) => {
  const originA = +value.split(" ").sort()[1];
  const originB = +value.split(" ").sort()[0];
  let A = +value.split(" ").sort()[1];
  let B = +value.split(" ").sort()[0];
  let gcd = 0;
  let r = 0;
  let temp;
  while (1) {
    if (A % B === 0) {
      gcd = B;
      break;
    }

    r = A % B;
    A = B;
    B = r;
  }

  ans.push((originA * originB) / gcd);
});

console.log(ans.join("\n"));
