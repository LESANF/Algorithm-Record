const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = 0;

a = parseInt(input[0]);

if ((a % 4 === 0 && a % 100 !== 0) || (a % 4 === 0 && a % 400 === 0)) {
    console.log('1');
} else {
    console.log('0');
}
