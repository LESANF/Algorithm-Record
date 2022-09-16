const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const cost = +input.shift();
const amount = input.shift();

function solution(input) {
    let ans = 'Yes';
    let receipt = 0;
    for (let i = 0; i < amount; i++) {
        receipt += input[i].split(' ')[0] * input[i].split(' ')[1];
    }

    if (cost === receipt) return 'Yes';
    else return 'No';
}

console.log(solution(input));
