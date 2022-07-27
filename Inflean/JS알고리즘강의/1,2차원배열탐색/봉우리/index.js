const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const square = [];

for (let i = 1; i <= n; i++) {
    square.push(input[i].split(' ').map(Number));
}

function solution(square) {
    let ans = 0;

    return ans;
}

console.log(solution(square));
