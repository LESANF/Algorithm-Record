const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    const height = +input[i].split(' ')[0];
    const width = +input[i].split(' ')[1];
    const guest = +input[i].split(' ')[2];

    const roomState = Array.from(Array(height), () => Array(width).fill(false));
    console.log(roomState);
}
