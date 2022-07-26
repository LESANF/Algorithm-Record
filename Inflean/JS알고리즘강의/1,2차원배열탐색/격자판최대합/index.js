const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const square = [];

for (let i = 1; i <= n; i++) {
    square.push(input[i].split(' ').map(Number));
}

function solution(square) {
    let ans = 0,
        sum1 = 0,
        sum2 = 0;

    for (let i = 0; i < square.length; i++) {
        for (let j = 0; j < square.length; j++) {
            sum1 += square[i][j];
            sum2 += square[j][i];
        }
        ans = Math.max(ans, sum1, sum2);
        sum1 = 0;
        sum2 = 0;
    }

    for (let i = 0; i < square.length; i++) {
        sum1 += square[i][i];
        sum2 += square[i][square.length - 1 - i];
    }
    ans = Math.max(ans, sum1, sum2);
    sum1 = 0;
    sum2 = 0;
    return ans;
}

console.log(solution(square));
