const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let result = (+input[0] * +input[1] * +input[2]).toString().split('');
let cnt = 0;
for (let i = 0; i <= 9; i++) {
    result.map((ele) => (ele === i.toString() ? cnt++ : ''));
    console.log(cnt);
    cnt = 0;
}
