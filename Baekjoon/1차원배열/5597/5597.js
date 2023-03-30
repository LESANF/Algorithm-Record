const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n').map(Number);

const ans = [];

for (let i = 1; i <= 30; i++) {
    if (input.indexOf(i) === -1) ans.push(i);
}

console.log(ans.join('\n'));
