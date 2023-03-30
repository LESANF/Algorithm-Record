const fs = require('fs');
const [defaultValue, ...range] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [basket, cnt] = defaultValue.split(' ');
const ans = Array(+basket).fill(0);

for (let i = 0; i < cnt; i++) {
    const [start, end, num] = range[i].split(' ');
    for (let j = start - 1; j <= end - 1; j++) {
        ans[j] = +num;
    }
}

console.log(ans.join(' '));
