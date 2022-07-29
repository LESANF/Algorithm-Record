const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const aInfo = input[1].split(' ').map(Number);
const bInfo = input[2].split(' ').map(Number);

function solution() {
    let ans;

    for (let i = 0; i < n; i++) {
        if (aInfo[i] < bInfo[i] || (aInfo[i] === 3 && bInfo[i] === 1)) {
            console.log('B');
        } else if (aInfo[i] > bInfo[i] || (aInfo[i] === 1 && bInfo[i] === 3)) {
            console.log('A');
        } else {
            console.log('D');
        }
    }
    return ans;
}

console.log(solution());
