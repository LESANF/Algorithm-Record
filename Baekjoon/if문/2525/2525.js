const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let hour = +input[0].split(' ')[0];
let minutes = +input[0].split(' ')[1];
let spend = +input[1];
let newMin = 0;

if (minutes + spend >= 60) {
    newMin = spend + minutes;

    hour += newMin / 60;
    if (hour >= 24) {
        hour -= 24;
    }
    minutes = newMin % 60;
} else {
    minutes += spend;
}

console.log(`${Math.floor(hour)} ${minutes}`);
