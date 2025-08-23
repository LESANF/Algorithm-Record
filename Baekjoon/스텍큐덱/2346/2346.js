const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = rest[0].split(" ").map(Number);
const getCurrentIndex = (index) =>
  ((index % balloons.length) + balloons.length) % balloons.length;

const answer = [];
let currentIndex = 0;

const balloons = numbers.map((value, index) => {
  return {
    value,
    index: index + 1,
  };
});

while (balloons.length > 0) {
  const targetBalloon = balloons.splice(currentIndex, 1)[0];
  answer.push(targetBalloon.index);

  if (balloons.length === 0) break;

  const moveStepCount = currentIndex + targetBalloon.value;
  currentIndex = getCurrentIndex(moveStepCount);
}

console.log(answer.join(" "));
