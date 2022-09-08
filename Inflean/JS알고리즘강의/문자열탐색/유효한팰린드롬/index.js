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

    console.log(Math.floor(filterWord.length / 2));
    let filterReverse = filterWord.split('').reverse().join('').toLocaleUpperCase();

    if (filterWord === filterReverse) return ans;
    else return 'NO';

    return filterWord;
}

console.log(solution(input));
