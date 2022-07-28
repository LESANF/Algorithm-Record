const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input[0];
const square = [];

for (let i = 1; i <= n; i++) {
    square.push(input[i].split(' ').map(Number));
}

function solution(square) {
    let ans = 0;
    //상하좌우 (-1,0), (1, 0), (0, -1), (0, 1)
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    for (let i = 0; i < square.length; i++) {
        for (let j = 0; j < square.length; j++) {
            let flag = true;
            for (let k = 0; k < 4; k++) {
                let dx1 = i + dx[k];
                let dy1 = j + dy[k];
                if (
                    dx1 > -1 &&
                    dy1 > -1 &&
                    dx1 < square.length &&
                    dy1 < square.length &&
                    square[dx1][dy1] > square[i][j]
                ) {
                    flag = false;
                    break;
                }
            }
            if (flag) ans++;
        }
    }

    return ans;
}

console.log(solution(square));
