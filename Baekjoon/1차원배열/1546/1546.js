const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let testAry = input[1].split(' ');
let maxScore = testAry.sort((a, b) => b - a)[0];
let sum = 0;
for (let i = 0; i < input[0]; i++) {
    sum += (testAry[i] / maxScore) * 100;
}
console.log(sum / input[0]);
