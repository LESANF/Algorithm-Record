const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = parseInt(input[0]);
let ans = '';

for (let i = a; i > 0; i--) {
    ans += i + '\n';
}

console.log(ans);
