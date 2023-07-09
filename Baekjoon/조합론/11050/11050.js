const fs = require("fs");
const [N, K] = fs
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getFactorial = (num) => {
  let returnNum = 1;
  for (let i = num; i > 0; i--) {
    returnNum *= i;
  }

  return returnNum;
};

console.log(getFactorial(N) / (getFactorial(N - K) * getFactorial(K)));
