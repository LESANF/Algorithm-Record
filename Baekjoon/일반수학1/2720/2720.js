const fs = require("fs");
const change = fs.readFileSync("예제.txt").toString().trim().split("\n");

const T = +change.shift();
let ans = [];

for (let i = 0; i < T; i++) {
  let restChangeMoney = +change[i];
  let divideUnit = [25, 10, 5, 1];

  while (divideUnit.length > 0) {
    const curDivideUnit = divideUnit.shift();

    if (curDivideUnit > restChangeMoney) {
      ans.push(0);
      continue;
    }

    ans.push(Math.floor(restChangeMoney / curDivideUnit));
    restChangeMoney = Math.floor(restChangeMoney % curDivideUnit);
  }

  console.log(ans.join(" "));
  divideUnit = [25, 10, 5, 1];
  ans = [];
}
