const fs = require("fs");
const [n, b] = fs.readFileSync("예제.txt").toString().trim().split(" ");

for (v of n) {
  console.log(v);
}
