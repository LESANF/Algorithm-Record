const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v);

const diceNum1 = input[0];
const diceNum2 = input[1];
const diceNum3 = input[2];

if (diceNum1 === diceNum2 && diceNum2 === diceNum3) console.log(10000 + diceNum1 * 1000);
