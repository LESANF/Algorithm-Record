const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('');

const dial = ['', '', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];

console.log(input.reduce((acc, cur) => acc + dial.findIndex((ele) => ele.includes(cur)), 0));
