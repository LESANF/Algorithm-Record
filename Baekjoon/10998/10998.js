const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = 0;
let b = 0;

a = Number(input[0]);
b = Number(input[1]);

console.log(a * b);
