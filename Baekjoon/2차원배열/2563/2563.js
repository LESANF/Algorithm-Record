const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;
let array2d = Array.from({ length: 100 }, (_) => Array.from({ length: 100 }, (_) => false));

const coloredPaperEa = +input.shift();

for (let i = 0; i < coloredPaperEa; i++) {
  const xPos = +input[i].split(" ")[0] - 1;
  const yPos = +input[i].split(" ")[1] - 1;

  for (let j = xPos; j < xPos + 10; j++) {
    for (let z = yPos; z < yPos + 10; z++) {
      array2d[j][z] = true;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (array2d[i][j] === true) cnt++;
  }
}

console.log(cnt);
