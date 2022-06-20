const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(input) {
    ans = Math.min(...input);
    return ans;
}

console.log(solution(input));
