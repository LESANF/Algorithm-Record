const fs = require('fs');
const [defaultValue, ...range] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [basket, cnt] = defaultValue.split(' ');
const ans = Array(+basket)
    .fill()
    .map((v, i) => i + 1);

for (let i = 0; i < cnt; i++) {
    let temp = 0;
    const start = +range[i].split(' ')[0];
    const end = +range[i].split(' ')[1];

    temp = ans[start - 1];
    ans[start - 1] = ans[end - 1];
    ans[end - 1] = temp;
}

console.log(ans.join(' '));
