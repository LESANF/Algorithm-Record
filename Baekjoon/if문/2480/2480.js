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
let cnt = 0;

const test = input.filter((v) => console.log(v + 1));

// for (let i = 0; i < input.length; i++) {
//     if (diceNum1 === input[i + 1]) {
//         cnt++;
//     }
// }

// switch (cnt) {
//     case 0:
//         console.log(Math.max(...input) * 100);
//         break;
//     case 1:
//         console.log('two same');
//         break;
//     case 2:
//         console.log(10000 + input[0] * 1000);
//         break;
// }

//console.log(cnt);
