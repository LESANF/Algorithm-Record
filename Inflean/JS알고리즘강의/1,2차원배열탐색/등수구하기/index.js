const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const numAry = input[1].split(' ').map(Number);

function solution(n, numAry) {
    let ans = Array.from({ length: n }, () => 1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (numAry[j] > numAry[i]) ans[i]++;
        }
    }

    return ans;
}

console.log(solution(n, numAry));
