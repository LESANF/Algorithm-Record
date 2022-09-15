const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    const word = input + ' ';
    const ans = [];
    let cnt = 1;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) {
            cnt++;
        } else {
            if (cnt === 1) {
                ans.push(word[i]);
            } else {
                ans.push(word[i]);
                ans.push(cnt);
                cnt = 1;
            }
        }
    }
    return ans.join('');
}

console.log(solution(input));
