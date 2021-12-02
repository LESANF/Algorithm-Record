const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = 0;
let b = 0;

a = parseInt(input[0]);
b = parseInt(input[1]);

if (a > b) {
    console.log('>');
} else if (a < b) {
    console.log('<');
} else {
    console.log('==');
}
