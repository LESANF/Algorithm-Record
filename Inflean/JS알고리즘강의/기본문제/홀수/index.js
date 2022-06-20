const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(input) {
    let sum = 0,
        min = Number.MAX_SAFE_INTEGER;
    input.map((v) => {
        if (v % 2 !== 0) {
            sum += v;
            if (min > v) min = v;
        }
    });
    return `${sum}\n${min}`;
}

console.log(solution(input));
