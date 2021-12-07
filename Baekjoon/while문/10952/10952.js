const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');
let cnt = 0;
while (parseInt(input[cnt].split(' ')[0]) !== 0 && parseInt(input[cnt].split(' ')[1]) !== 0) {
    //console.log(parseInt(input[cnt].split(' ')[0]) + parseInt(input[cnt].split(' ')[1]));
    cnt++;
}

let test = '1';
