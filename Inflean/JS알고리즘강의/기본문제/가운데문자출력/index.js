const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans;
    const mid = parseInt(input.length / 2);
    console.log(mid);
    if (input.length % 2 === 1) ans = input.substring(mid, mid + 1);
    else ans = input.substring(mid - 1, mid + 1);
    return ans;
}

console.log(solution(input));
