const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().toUpperCase().trim();

const abcAry = Array(26).fill(0);
for (let i = 0; i < input.length; i++) abcAry[input[i].charCodeAt(0) - 65]++;
const max = Math.max(...abcAry);

if (abcAry.filter((ele) => ele === max).length > 1) console.log('?');
else console.log(String.fromCharCode(abcAry.indexOf(max) + 65));

// let resultAry = Array.from({ length: 26 }, () => 0);
// let abcAry = [];
// let max = 0;
// let idx = 0;
// for (let i = 97; i <= 122; i++) {
//     abcAry.push(String.fromCharCode(i));
// }
// input
//     .toLowerCase()
//     .split('')
//     .map((ele) => resultAry[abcAry.indexOf(ele)]++);
// max = Math.max(...resultAry);

// idx = resultAry.indexOf(max);

// resultAry.sort((a, b) => b - a);

// resultAry[0] === resultAry[1] ? console.log('?') : console.log(abcAry[idx].toUpperCase());
