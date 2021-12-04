const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let a = 0;

a = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}
