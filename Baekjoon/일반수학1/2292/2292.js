const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();
let sum = 1;
let n = 0;
while (sum + 6 * n < +input) {
    sum += 6 * n;
    n++;
}
console.log(n + 1);
