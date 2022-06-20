const fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans;
    ans = input.replaceAll('A', '#');
    return ans;
}

console.log(solution(input));
