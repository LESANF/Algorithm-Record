const fs = require('fs');
const [a, b, c] = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);
c - b <= 0 ? console.log(-1) : Math.floor(a / (c - b) + 1);
