const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

// const ary = [];
// for (let i = +input[0]; i <= +input[1]; i++) {
//     ary.push(i);
// }

// for (let i = 2; i <= Math.sqrt(ary[ary.length - 1]); i++) {
//     for (let j = 2; i * j <= ary[ary.length - 1]; j++) {
//         if (ary.indexOf(j * i) !== -1) {
//             ary.splice(ary.indexOf(j * i), 1);
//         }
//     }
// }

// ary.map((v) => console.log(v));

const ary = Array(+input[1] + 1).fill(true);

for (let i = 2; i <= parseInt(Math.sqrt(+input[1])); i++) {
    for (let j = 2; i * j <= +input[1]; j++) {
        ary[i * j] = false;
    }
}

ary.map((v, i) => {
    if (i >= +input[0] && v === true && i !== 1 && i !== 0) console.log(i);
});
