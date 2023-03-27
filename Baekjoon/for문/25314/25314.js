const fs = require('fs');
const input = +fs.readFileSync('예제.txt').toString();

const longCnt = input / 4;
const longAry = [];

for (let i = 0; i < longCnt; i++) {
    longAry.push('long');
}

console.log(`${longAry.join(' ')} int`);
