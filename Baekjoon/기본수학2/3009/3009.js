const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let x,
    y = 0;

for (let i = 0; i < input.length; i++) {
    x ^= input[i].split(' ')[0];
    y ^= input[i].split(' ')[1];
}
console.log(`${x} ${y}`);
