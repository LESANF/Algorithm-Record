const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    const height = +input[i].split(' ')[0];
    const width = +input[i].split(' ')[1];
    const guest = +input[i].split(' ')[2];

    let cnt = 0;
    for (let z = 1; z <= width; z++) {
        for (let j = 1; j <= height; j++) {
            cnt++;
            if (cnt === guest) {
                if (z < 10) console.log(`${j}0${z}`);
                else console.log(`${j}${z}`);
            }
        }
        if (cnt === guest) break;
    }
}
