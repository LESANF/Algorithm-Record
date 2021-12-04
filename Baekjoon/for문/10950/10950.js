const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let testCase = parseInt(input[0]);

for (let i = 1; i <= testCase; i++) {
    console.log(parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]));
}
