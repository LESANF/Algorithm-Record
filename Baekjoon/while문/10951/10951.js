const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let cnt = 0;

while (cnt < input.length) {
    console.log(+input[cnt].split(' ')[0] + +input[cnt].split(' ')[1]);
    cnt++;
}
