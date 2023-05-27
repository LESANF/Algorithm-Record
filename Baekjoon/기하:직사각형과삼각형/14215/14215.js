const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim().split(" ").map(Number);

const eachAngleSort = input.sort((a, b) => a - b);

if (eachAngleSort[0] + eachAngleSort[1] > eachAngleSort[2]) console.log(eachAngleSort[0] + eachAngleSort[1] + eachAngleSort[2]);
else console.log(eachAngleSort[0] + eachAngleSort[1] + (eachAngleSort[0] + eachAngleSort[1] - 1));
