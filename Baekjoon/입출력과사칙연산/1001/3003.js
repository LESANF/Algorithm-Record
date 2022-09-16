const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(input) {
    let chessman = [1, 1, 2, 2, 2, 8];
    let ans = [];
    for (let i = 0; i < input.length; i++) {
        ans.push(chessman[i] - input[i]);
    }
    return ans.join(' ');
}

console.log(solution(input));
