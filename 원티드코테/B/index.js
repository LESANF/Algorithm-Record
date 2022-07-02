const fs = require('fs');
let [A, B, C] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const monsters = +A.split(' ')[0];
const siruHp = +A.split(' ')[1];

const monsterDmg = [];
const personCnt = [];
for (v of B.split(' ')) {
    monsterDmg.push(+v);
}

for (v of C.split(' ')) {
    personCnt.push(+v);
}

// function solution(word, char) {
//     let ans = 0;
//     for (v of word) {
//         v === char ? ans++ : '';
//     }
//     return ans;
// }

// console.log(solution(word, char));
