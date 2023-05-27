const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split("\n");

const posEtc = +input.shift();

let xAry = [];
let yAry = [];

for (const value of input) {
  if (posEtc === 1) {
    console.log(0);
    return;
  }
  xAry.push(value.split(" ")[0]);
  yAry.push(value.split(" ")[1]);
}

xAry = xAry.map(Number).sort((a, b) => a - b);
yAry = yAry.map(Number).sort((a, b) => a - b);

console.log((xAry[xAry.length - 1] - xAry[0]) * (yAry[yAry.length - 1] - yAry[0]));
