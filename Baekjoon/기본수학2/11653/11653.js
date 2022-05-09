const fs = require('fs');
const input = +fs.readFileSync('예제.txt').toString().trim();

let num = input;
let quotient = 0;
let divide = 2;

while (num % divide === 0) {
    if (Number.isInteger(num / divide)) {
        num /= divide;
    } else divide++;

    console.log(divide, num);
}
