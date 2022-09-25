const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
    const M = +input[0].split(' ')[1];
    const cards = input[1].split(' ').map(Number);
    let gap = Number.MAX_SAFE_INTEGER;
    let ans;

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                const sum = cards[i] + cards[j] + cards[k];
                if (sum <= M) {
                    if (M - sum < gap) {
                        gap = M - sum;
                        ans = sum;
                    }
                }
            }
        }
    }
    return ans;
}

console.log(solution(input));
