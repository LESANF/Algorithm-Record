const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(input) {
    let ans = 'YES';
    const word = input.toLowerCase();
    const wordR = word.split('').reverse().join('');
    if (word !== wordR) return 'NO';
    return ans;
}

console.log(solution(input));

// function solution(input) {
//     let ans = 'YES';
//     const word = input.toLowerCase();
//     for (let i = 0; i < Math.floor(word.length / 2); i++) {
//         if (word[i] !== word[word.length - 1 - i]) return 'NO';
//     }
//     return ans;
// }

// console.log(solution(input));
