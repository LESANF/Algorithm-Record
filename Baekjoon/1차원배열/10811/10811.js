const fs = require('fs');
const [defaultValue, ...range] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [basket, cnt] = defaultValue.split(' ');
const ans = Array(+basket)
    .fill()
    .map((v, i) => i + 1);

for (let i = 0; i < cnt; i++) {
    const start = +range[i].split(' ')[0];
    const end = +range[i].split(' ')[1];
    const delRange = end - start + 1;
    const sliceTemp = ans.slice(start - 1, end).reverse();

    ans.splice(start - 1, delRange, ...sliceTemp);
}

console.log(ans.join(' '));
