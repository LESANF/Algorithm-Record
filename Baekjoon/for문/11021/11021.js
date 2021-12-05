const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let a = parseInt(input[0]);
let ans = '';

for (let i = 1; i <= a; i++) {
    ans += `Case #${i}: ${parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1])}\n`;
}

console.log(ans);
