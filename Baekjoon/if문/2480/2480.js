const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);

if (input[0] === input[1] && input[1] === input[2]) console.log(10000 + input[0] * 1000);
else if (input[0] === input[1] || input[1] === input[2]) console.log(1000 + input[1] * 100);
else console.log(input[2] * 100);
