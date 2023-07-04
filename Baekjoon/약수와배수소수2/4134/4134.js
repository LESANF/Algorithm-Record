const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let primeMinNumber = Number.MAX_SAFE_INTEGER;

const getPrimeCnt = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

rest.forEach((value) => {
  let testValue = value;
  while (1) {
    if (getPrimeCnt(testValue)) {
      console.log(testValue);
      break;
    } else {
      testValue++;
      getPrimeCnt(testValue);
    }
  }
});
