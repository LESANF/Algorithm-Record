const fs = require('fs');
const [a, b, v] = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);
console.log(Math.ceil((v - b) / (a - b)));
