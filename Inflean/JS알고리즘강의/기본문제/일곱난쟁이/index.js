const fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split(' ').map(Number);

function solution(input) {
    let ans, tot;
    tot = input.reduce((prev, v) => (prev += v));

    for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (tot - (input[i] + input[j]) === 100) {
                input.splice(i, 1);
                input.splice(j, 1);
            }
        }
    }
    ans = input.join(' ');
    return ans;
}

console.log(solution(input));
