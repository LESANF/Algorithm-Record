const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

const primeAry = Array(10001).fill(true);
primeAry[0] = false;
primeAry[1] = false;

for (let i = 2; i <= 100; i++) {
    for (let j = 2; i * j <= 10000; j++) {
        primeAry[i * j] = false;
    }
}
// 10000이하 소수개수 1229개, 소수는 true. 해당index가 수를 표현.

for (let i = 0; i < input.length; i++) {
    if (input[i] <= 3) continue; //4부터 돌아가야함.
    const even = input[i];
    const cutPrimeAry = primeAry.slice(0, even + 1);
    let ans = [];
    let minCnt = 0;
    for (let j = 2; j <= even; j++) {
        if (cutPrimeAry[j] === true && cutPrimeAry[even - j] === true) {
            if (even - j >= j) {
                if (minCnt <= even - j - j) {
                    ans = [j, even - j];
                }
            }
        }
    }
    ans.sort((a, b) => a - b);
    console.log(ans.join(' '));
}
