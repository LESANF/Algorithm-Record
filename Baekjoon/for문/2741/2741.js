const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = parseInt(input[0]);
let ans = '';
for (let i = 1; i <= a; i++) {
    ans += i + '\n';
}

console.log(ans);
