const fs = require('fs');
const input = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split('\n')
    .map((ele) => +ele);
console.log(Array.from(new Set(input.map((ele) => ele % 42))).length);
