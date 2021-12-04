const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = 0;
let b = 0;

a = parseInt(input[0]);
b = parseInt(input[1]);

b -= 45;

if (b < 0) {
    a -= 1;
    if (a < 0) {
        a = 23;
    }

    b += 60;
}
console.log(a + ' ' + b);
