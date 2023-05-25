const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n").map(Number);

let idx = 0;

while (input[idx] !== -1) {
  const perfectNumber = input[idx];
  const sqrtNum = Math.floor(Math.sqrt(perfectNumber));

  const measureList = [];
  for (let i = 1; i <= sqrtNum; i++) {
    if (perfectNumber % i === 0) {
      measureList.push(perfectNumber / i);
      measureList.push(i);
    }
  }

  measureList.sort((a, b) => a - b);

  const lastNum = measureList.pop();
  const addedValue = measureList.reduce((acc, cur) => acc + cur, 0);

  if (lastNum === addedValue) console.log(`${lastNum} = ${measureList.join(" + ")}`);
  else console.log(`${perfectNumber} is NOT perfect.`);
  idx++;
}
