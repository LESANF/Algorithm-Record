const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const numAry = input[1].split(' ').map(Number);

function solution(numAry) {
    let ans = [numAry[0]];
    for (let i = 1; i < n; i++) {
        if (numAry[i] > numAry[i - 1]) ans.push(numAry[i]);
    }
    return ans.join(' ');
}

console.log(solution(numAry));
