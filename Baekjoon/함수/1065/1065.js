const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString();

let cnt = 0;
let resultAry = [];

for (let i = 1; i <= input; i++) {
    if (i >= 1 && i <= 99) cnt++;
    if (i > 99) {
        for (let j = 0; j < String(i).split('').length; j++) {
            if (j !== String(i).split('').length - 1) {
                resultAry.push(+String(i).split('')[j] - +String(i).split('')[j + 1]);
            }
        }
        if (resultAry.filter((ele) => ele !== +String(i).split('')[0] - +String(i).split('')[1]).length === 0)
            cnt++;
        resultAry = [];
    }
}
console.log(cnt);
