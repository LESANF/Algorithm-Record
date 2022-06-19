const fs = require('fs');
const [a, b, c] = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(a, b, c) {
    let ans;
    ans = Math.min(a, b, c);
    return ans;
}

console.log(solution(a, b, c));
