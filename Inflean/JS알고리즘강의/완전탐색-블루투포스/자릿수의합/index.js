const fs = require('fs');
const [N, numAry] = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(N, numAry) {
    let ans = 0;
    const ary = numAry.split(' ');
    let maxSum = Number.MIN_SAFE_INTEGER,
        sumLen = 0;
    for (let v of ary) {
        let curSum = 0;
        for (let i = 0; i < v.length; i++) {
            curSum += +v[i];
        }

        if (maxSum <= curSum) {
            if (ans < +v) {
                maxSum = curSum;
                sumLen = v.length;
                ans = +v;
            }
        }
    }

    return ans;
}

console.log(solution(N, numAry));
