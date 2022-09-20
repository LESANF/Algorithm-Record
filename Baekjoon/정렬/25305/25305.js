const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(input) {
    const N = +input[0].split(' ')[0];
    const K = +input[0].split(' ')[1];
    const scoreSheet = input[1]
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);
    scoreSheet.unshift('');

    return scoreSheet[K];
}

console.log(solution(input));
