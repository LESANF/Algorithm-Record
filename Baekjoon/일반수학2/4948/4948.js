const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split('\n')
    .map((v) => +v);

for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) break;

    let start = input[i];
    let end = start * 2;
    let cnt = 0;
    let ary = Array(end + 1).fill(true);

    for (let j = 2; j <= parseInt(Math.sqrt(end)); j++) {
        for (let z = 2; j * z <= end; z++) {
            ary[j * z] = false;
        }
    }

    ary.map((v, i) => {
        if (v === true && i !== 0 && i !== 1 && i > start) cnt++;
    });

    console.log(cnt);
}
