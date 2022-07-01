const fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) ans++;
    }

    return ans;
}

console.log(solution(input));
