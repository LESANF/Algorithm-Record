const fs = require('fs');
const [a, b, c] = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(a, b, c) {
    let ans = 'YES',
        max,
        tot = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (max < c) max = c;
    if (tot - max <= max) ans = 'NO';
    return ans;
}

console.log(solution(a, b, c));
