function solution(input1, input2) {
    const inputA = parseInt(input1);
    const inputB = parseInt(input2);

    if (inputA > 0 && inputB > 0) {
        console.log('1');
    } else if (inputA < 0 && inputB > 0) {
        console.log('2');
    } else if (inputA < 0 && inputB < 0) {
        console.log('3');
    } else {
        console.log('4');
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let list1 = input[0].split(' ').map((el) => el);
    let list2 = input[1].split(' ').map((el) => el);
    solution(list1, list2);
    process.exit();
});
