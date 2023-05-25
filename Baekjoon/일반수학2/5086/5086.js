const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");

const ans = [];
const checkMultiple = (a, b) => (a % b === 0 ? true : false);

const checkMeasure = (a, b) => {
  const measureList = [];
  for (let i = 0; i <= b; i++) if (b % i === 0) measureList.push(i);
  return measureList.indexOf(a) === -1 ? false : true;
};

// 배수를 구하는식, 약수를 구하는 식 두가지 필요.
for (let i = 0; i < input.length; i++) {
  const a = +input[i].split(" ")[0];
  const b = +input[i].split(" ")[1];
  if (a === b) continue;

  const isMultiple = checkMultiple(a, b);
  const isMeasure = checkMeasure(a, b);

  if (!isMultiple && !isMeasure) ans.push("neither");
  else if (isMeasure) ans.push("factor");
  else if (isMultiple) ans.push("multiple");
}

console.log(ans.join("\n"));
