const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = input.toLowerCase().replace(/[a-z]/g, '');
    return parseInt(ans);
}

console.log(solution(input));
