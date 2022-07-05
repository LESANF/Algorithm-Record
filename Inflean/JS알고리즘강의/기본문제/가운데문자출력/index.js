const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans;
    input = input.split('');
    input.splice(0, 1);
    input.splice(input.length - 1, 1);
    ans = input.join('');
    return ans;
}

console.log(solution(input));
