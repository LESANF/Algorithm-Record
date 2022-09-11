const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

const regex = /^[a-z|A-Z]+$/;

function solution(input) {
    let ans = 'YES',
        filterWord = '';

    for (let v of input) {
        if (regex.test(v)) filterWord = filterWord + v;
    }

    filterWord = filterWord.toLocaleUpperCase();
    const centerPos = Math.floor(filterWord.length / 2);

    for (let i = 0; i < centerPos; i++) {
        if (filterWord[i] !== filterWord[filterWord.length - i - 1]) ans = 'NO';
    }

    return ans;
}

console.log(solution(input));
