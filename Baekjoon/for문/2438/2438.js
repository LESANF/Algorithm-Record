const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let a = 0;
let star = '';

a = parseInt(input[0]);

for (let i = 0; i < a; i++) {
    star += '*';
    console.log(star);
}
