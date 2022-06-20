const fs = require('fs');
let [day, carNum] = fs.readFileSync('예제.txt').toString().trim().split('\n');

function solution(day, carNum) {
    let ans = 0;
    let ary = carNum.split(' ').map(Number);
    ary.map((v) => {
        if (v % 10 === +day) ans++;
    });
    return ans;
}

console.log(solution(day, carNum));
