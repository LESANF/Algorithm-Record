const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    const N = +input;
    let ans = Number.MAX_SAFE_INTEGER;
    let flag = false;
    for (let i = N - 1; i > 0; i--) {
        const own = i;
        let sumDigit = 0;
        for (let v of own.toString()) {
            sumDigit += Number(v);
        }
        if (own + sumDigit === N) {
            flag = true;
            if (own < ans) {
                ans = own;
            }
        }
    }
    return flag ? ans : 0;
}

console.log(solution(input));
