const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let ans = 0;

for (let i = 0; i < input.length; i++) {
    ans += Number(input[i]);
}

console.log(ans);
