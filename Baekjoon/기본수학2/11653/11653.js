const fs = require('fs');
const input = +fs.readFileSync('예제.txt').toString().trim();

let num = input;
let divide = 2;

while (num !== 1) {
    if (Math.floor(num % divide) !== 0) {
        divide++;
    } else {
        num = Math.floor(num / divide);
        console.log(divide);
    }
}
