const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();

const getFactorial = (num) => {
  let returnNum = 1;
  for (let i = num; i > 0; i--) {
    returnNum *= i;
  }

  return returnNum;
};

input.forEach((value) => {
  const [n, r] = value
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  console.log(
    Math.round(getFactorial(n) / (getFactorial(n - r) * getFactorial(r)))
  );
});
