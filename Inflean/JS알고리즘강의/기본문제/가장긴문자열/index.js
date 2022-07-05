const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

function solution(num, wordAry) {
    let ans,
        longWord = wordAry[0];
    for (let i = 0; i < num; i++) {
        if (wordAry[i].length > longWord.length) longWord = wordAry[i];
    }
    ans = longWord;
    return ans;
}

console.log(solution(num, wordAry));
