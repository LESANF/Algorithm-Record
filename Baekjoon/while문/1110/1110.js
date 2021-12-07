const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let cnt = 0;
let finalNum = input[0];
let temp;

if (+finalNum < 10) {
    finalNum = '0' + finalNum;
}

let chgNum = finalNum;

do {
    temp = '';
    temp = +chgNum.split('')[0] + +chgNum.split('')[1];

    if (+temp < 10) {
        temp = '0' + temp;
    }
    chgNum = chgNum.split('')[1] + temp.toString().split('')[1];

    cnt++;
} while (+chgNum !== +finalNum);

console.log(cnt);
