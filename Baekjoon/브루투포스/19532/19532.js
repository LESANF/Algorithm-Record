const fs = require("fs");
let [x1, y1, ans, x2, y2, ans2] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

for (let i = -999; i < 1000; i++) {
  for (let j = -999; j < 1000; j++) {
    if (x1 * i + y1 * j === ans && x2 * i + y2 * j === ans2) {
      console.log(`${i} ${j}`);
      break;
    }
  }
}
