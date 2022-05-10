const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

// 소수는 1과 자기자신이외에 나눠지는값이 있으면안됨.
let cnt = 0;
let ans = 0;
for (let i = 0; i < input[0]; i++) {
    for (let j = 1; j <= input[1].split(' ')[i]; j++) {
        if (+input[1].split(' ')[i] === 1) continue;
        if (input[1].split(' ')[i] % j === 0) cnt++;
    }
    if (cnt === 2) ans++;
    cnt = 0;
}

console.log(ans);
