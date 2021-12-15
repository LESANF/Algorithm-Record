const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const groupWordCheck = (T) => {
    let garbege = [];
    let chk = true;
    let cnt = 0;

    for (let i = 1; i <= T; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (garbege.indexOf(input[i][j]) === -1) {
                garbege.push(input[i][j]);
            } else {
                if (input[i][j] !== input[i][j - 1]) {
                    chk = false;
                    break;
                } else {
                    continue;
                }
            }
        }

        if (chk === true) cnt++;
        garbege = [];
        chk = true;
    }

    return cnt;
};

console.log(groupWordCheck(input[0]));
