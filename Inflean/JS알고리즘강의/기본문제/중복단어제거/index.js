const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = +input.shift();

function solution(input) {
    let ans;
    const prevArr = input.split('');
    const newArr = prevArr.filter((v, i) => prevArr.indexOf(v) === i);
    ans = newArr.join('');
    return ans;
}

console.log(solution(input));
