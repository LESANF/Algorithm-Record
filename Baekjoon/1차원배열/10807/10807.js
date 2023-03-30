const fs = require('fs');
const [cnt, num, findThis] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const numAry = num.split(' ');
const ans = numAry.filter((ele) => +ele === +findThis).length;
console.log(ans);
