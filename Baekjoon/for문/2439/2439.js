const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let a = 0;
// let star = '';

a = parseInt(input[0]);

// for (let i = 1; i <= a; i++) {
//     if (i !== a) {
//         let cnt = 0;
//         for (let j = 1; j <= a - i; j++) {
//             star += ' ';
//             cnt++;
//         }

//         for (let j2 = 1; j2 <= a - cnt; j2++) {
//             if (j2 !== a - cnt) {
//                 star += '*';
//             } else {
//                 star += '*\n';
//             }
//         }
//     } else {
//         for (let z = 1; z <= a; z++) {
//             star += '*';
//         }
//     }
// }
// console.log(star);

for (let i = 1; i <= a; i++) console.log(' '.repeat(a - i) + '*'.repeat(i));
