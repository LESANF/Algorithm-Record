const fs = require('fs');
const [s, t] = fs.readFileSync('예제.txt').toString().trim().split(' ');

// function solution(s, t) {
//     let ans = [];
//     const ary = s.split('');
//     const char = t;
//     let min = Number.MAX_SAFE_INTEGER;

//     for (let i = 0; i < ary.length; i++) {
//         if (ary[i] === char) {
//             ans.push(0);
//         } else {
//             //e가 아닐때만 돔.
//             for (j = 0; j < ary.length; j++) {
//                 const a = i + 1;
//                 if (ary[j] === char) {
//                     //돌면서 e가 나왔을때.
//                     if (min > Math.abs(j + 1 - a)) min = Math.abs(j + 1 - a);
//                 }
//             }
//             ans.push(min);
//             min = Number.MAX_SAFE_INTEGER;
//         }
//     }

//     return ans.join('');
// }

function solution(s, t) {
    let ans = [];
    let p = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            p = 0;
            ans.push(p);
        } else {
            p++;
            ans.push(p);
        }
    }

    p = Number.MAX_SAFE_INTEGER;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) p = 0;
        else {
            p++;
            ans[i] = Math.min(ans[i], p);
        }
    }
    return ans.join('');
}

console.log(solution(s, t));
