const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = '';
    for (v of input) {
        if (v === v.toUpperCase()) {
            ans += v.toLowerCase();
        } else {
            ans += v.toUpperCase();
        }
    }
    return ans;
}

console.log(solution(input));
