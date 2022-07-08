const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input.shift();

function solution(input) {
    let ans;
    const newArr = input.filter((v, i) => input.indexOf(v) === i);
    ans = newArr.join('\n');
    return ans;
}

console.log(solution(input));
