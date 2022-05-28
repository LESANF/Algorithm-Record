const fs = require('fs');
let input = +fs.readFileSync('예제.txt').toString().trim();

let five,
    three = 0;
while (1) {
    if (input % 5 === 0) {
        five = input / 5;
        console.log(five + three);
        break;
    }

    if (input < 0) {
        console.log(-1);
        break;
    }

    input -= 3;
    three++;
}
