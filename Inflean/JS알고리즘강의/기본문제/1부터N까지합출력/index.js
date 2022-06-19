const fs = require('fs');
const input = +fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = 0;
    for (let i = 1; i <= input; i++) {
        ans += i;
    }
    return ans;
}

console.log(solution(input));
