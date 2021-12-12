const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const T = input.shift();
let ans = '';
input.map((ele) => {
    const [loop, str] = ele.split(' ');
    str.split('').map((ele) => (ans += ele.repeat(loop)));
    console.log(ans);
    ans = '';
});
