const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

let ans = new Set();
ans.add("ChongChong");

const getDancerChk = (name) => (ans.has(name) ? true : false);

for (const dancer of rest) {
  const prevDancer = dancer.split(" ")[0];
  const rightSideDancer = dancer.split(" ")[1];

  if (getDancerChk(prevDancer) || getDancerChk(rightSideDancer)) {
    ans.add(prevDancer);
    ans.add(rightSideDancer);
  } else continue;
}

console.log(ans.size);
