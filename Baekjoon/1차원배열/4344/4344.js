const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let sum = 0;
let avg = 0;
for (let i = 1; i <= input[0]; i++) {
    input[i]
        .split(' ')
        .filter((ele, idx) => idx !== 0)
        .map((ele) => (sum += +ele));

    avg = sum / input[i].split(' ')[0];
    const result = input[i].split(' ').filter((ele, idx) => idx !== 0 && avg < ele);
    console.log(`${((result.length / (input[i].split(' ').length - 1)) * 100).toFixed(3)}%`);

    sum = 0;
    avg = 0;
}
