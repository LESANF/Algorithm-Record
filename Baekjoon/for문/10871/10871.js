const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const flag = input[0].split(' ')[1];
let sequenceAry = input[1].split(' ').map((ele) => parseInt(ele));
const ans = sequenceAry.filter((ele) => ele < flag);
console.log(ans.join(' '));
