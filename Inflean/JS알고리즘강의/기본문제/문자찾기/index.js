const fs = require('fs');
let [word, char] = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(word, char) {
    let ans = 0;
    for (v of word) {
        v === char ? ans++ : '';
    }
    return ans;
}

console.log(solution(word, char));
