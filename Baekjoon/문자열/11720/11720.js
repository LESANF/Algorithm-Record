const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let sum = 0;
let num = +input[1];

while (num !== 0) {
    sum += num % 10;
    num = parseInt(num / 10);
}
console.log(sum);
