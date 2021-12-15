// const fs = require('fs');
// let input = fs.readFileSync('예제.txt').toString();
// const chgAry = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
// for (let spell of chgAry) input = input.split(spell).join('^');
// console.log(input.length);

console.log(
    require('fs')
        .readFileSync('예제.txt')
        .toString()
        .trim()
        .replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, 'a').length
);
