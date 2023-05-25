const fs = require("fs");
const [N, K] = fs.readFileSync("예제.txt").toString().trim().split(" ").map(Number);

const measureList = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) measureList.push(i);
}

measureList.sort((a, b) => a - b);

if (measureList.length < K) console.log(0);
else console.log(measureList[K - 1]);
