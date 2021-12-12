const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

console.log(Math.max(...input.map((ele) => ele.split('').reverse().join('')).map(Number)));
