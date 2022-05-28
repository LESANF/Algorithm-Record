const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
    const [height, width, guest] = input[i].split(' ').map(Number);

    const roomNo = Math.ceil(guest / height);
    const floor = guest % height === 0 ? height : guest % height;
    console.log(roomNo < 10 ? `${floor}0${roomNo}` : `${floor}${roomNo}`);
}
