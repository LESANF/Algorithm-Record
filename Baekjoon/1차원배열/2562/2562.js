const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split('\n')
    .map((ele) => +ele);

console.log(Math.max(...input));
for (let i = 0; i < input.length; i++) {
    if (input[i] === Math.max(...input)) {
        console.log(i + 1);
        break;
    }
}
