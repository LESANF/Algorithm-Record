const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const k = 2; //층
const n = 3; //호
let sum = 0;

for (let i = 0; i <= k - 1; i++) {
    for (let j = 1; j <= n; j++) {
        console.log(`층: ${i}, 호수: ${j}`);
    }
}
