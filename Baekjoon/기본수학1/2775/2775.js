const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const T = input.shift();

for (let x = 0; x < T; x++) {
    const floor = input.shift();
    let roomNo = input.shift();
    const aptTable = [];

    for (let y = 0; y <= floor; y++) {
        aptTable.push([1]);
        for (let z = 1; z < roomNo; z++) {
            if (y === 0) aptTable[y].push(z + 1);
            else aptTable[y].push(aptTable[y][z - 1] + aptTable[y - 1][z]);
        }
    }
    roomNo = +roomNo - 1;
    console.log(aptTable[floor][roomNo]);
}
