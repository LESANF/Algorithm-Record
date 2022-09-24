const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = '';
    for (let i = 1; i <= input; i++) {
        ans += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n';
    }
    return ans;
}

console.log(solution(input));
