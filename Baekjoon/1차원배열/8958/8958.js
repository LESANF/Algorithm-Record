const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let sum = 0;
for (let i = 0; i < input[0]; i++) {
    input[i + 1].split('X').map((ele) => {
        if (ele.includes('O')) {
            for (let j = 1; j <= ele.length; j++) {
                sum += j;
            }
        }
    });
    console.log(sum);
    sum = 0;
}
