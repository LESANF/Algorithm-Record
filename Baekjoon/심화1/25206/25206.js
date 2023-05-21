const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");

const standard = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const solution = () => {
  let totalScore = 0;
  let calcScore = 0;

  for (let v of input) {
    const [subject, score, standardKey] = v.split(" ");
    if (standardKey === "P") continue;

    calcScore += standard[standardKey] * +score;
    totalScore += +score;
  }

  return (calcScore / totalScore).toFixed(6);
};

console.log(solution());
