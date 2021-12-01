const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let a = 0;
let b = 0;

a = input[0];
b = input[1];

let sumMemoryUnits = 0;
let sumMemoryTens = 0;
let sumMemoryHundreds = 0;

for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
        const preResult = parseInt(a.split('')[j]) * parseInt(b.split('')[i]);
        let sumMemory = 0;
        if (j === 2) {
            sumMemory += preResult;
        } else if (j === 1) {
            sumMemory += preResult * 10;
        } else {
            sumMemory += preResult * 100;
        }

        if (i === 2) {
            sumMemoryUnits += sumMemory;
        } else if (i === 1) {
            sumMemoryTens += sumMemory;
        } else {
            sumMemoryHundreds += sumMemory;
        }
    }
}

console.log(sumMemoryUnits);
console.log(sumMemoryTens);
console.log(sumMemoryHundreds);
console.log(sumMemoryUnits + sumMemoryTens * 10 + sumMemoryHundreds * 100);
