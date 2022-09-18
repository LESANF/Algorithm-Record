const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n').map(Number);

const N = input.shift();

function solution(input) {
    return input.sort((a, b) => a - b).join('\n');
}

console.log(solution(input));
