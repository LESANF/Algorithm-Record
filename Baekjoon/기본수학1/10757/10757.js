const fs = require('fs');
const [a, b] = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split(' ')
    .map((ele) => BigInt(ele));
const ans = a + b;
console.log(ans.toString());
