const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let ary = input[1].split(' ').map((ele) => +ele);
ary.sort((a, b) => a - b);

console.log(`${ary[0]} ${ary[ary.length - 1]}`);
