const fs = require('fs');
const input = +fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans;
    ans = Math.ceil(input / 12);
    return ans;
}

console.log(solution(input));
