const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const N = input.shift();
let obj = {};

function makeObj(input) {
    for (let i = 0; i < N; i++) {
        obj[i] = 1;
    }
}

makeObj();

function solution(input) {
    let ans = [];

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i == j) continue;
            const [w1, h1, w2, h2] = [
                +input[i].split(' ')[0],
                +input[i].split(' ')[1],
                +input[j].split(' ')[0],
                +input[j].split(' ')[1],
            ];

            if (w2 > w1 && h2 > h1) obj[i]++;
        }
    }

    return Object.values(obj).join(' ');
}

console.log(solution(input));
