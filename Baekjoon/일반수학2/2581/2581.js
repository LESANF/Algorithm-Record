const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

for (let i = +input[0]; i <= +input[1]; i++) {
    if (i === 1) continue;
    let candidate = i;
    let cnt = 0;
    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
        if (candidate % j === 0) cnt++;
    }

    if (cnt === 0) console.log(candidate);
    cnt = 0;
}

decimalAry.sort((a, b) => a - b);

decimalAry.length > 0
    ? console.log(`${decimalAry.reduce((sum, currValue) => sum + currValue)}\n${decimalAry[0]}`)
    : console.log(-1);
