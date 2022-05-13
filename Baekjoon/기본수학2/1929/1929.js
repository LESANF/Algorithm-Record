const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

const ary = [];
for (let i = +input[0]; i <= +input[1]; i++) {
    ary.push(i);
}

console.log(ary);

for (let i = 0; i < ary.length; i++) {
    let num = ary[0];
}
