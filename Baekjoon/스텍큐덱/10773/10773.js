const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const ans = [];

rest.map(Number).forEach((num, index) => {
  if (index === 0) ans.push(num);
  else {
    if (num === 0) ans.pop();
    else ans.push(num);
  }
});

console.log(ans.reduce((a, b) => a + b, 0));
