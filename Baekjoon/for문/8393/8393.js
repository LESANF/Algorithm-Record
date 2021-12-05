const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = parseInt(input[0]);

console.log((a * (a + 1)) / 2);
