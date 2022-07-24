const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const result = input[1].split(' ').map(Number);

function solution() {
    let ans = 0;
    let score = 0;

    for (value of result) {
        if (value === 1) {
            score++;
            ans += score;
        } else {
            score = 0;
        }
    }

    return ans;
}

console.log(solution());
