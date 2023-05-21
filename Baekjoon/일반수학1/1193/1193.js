const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();

let layer = 1;
let index = 0;
let numerator = 0;
let denominator = 0;
let result = '';

while (Math.floor((layer * (layer + 1)) / 2) < input) layer++;
index = Math.abs(Math.floor(((layer - 1) * layer) / 2) - input);

if (layer % 2 === 0) {
    numerator = index;

    if (index === 1) denominator = layer;
    else denominator = layer - index + 1;

    console.log(`${numerator}/${denominator}`);
} else {
    denominator = index;

    if (index === 1) numerator = layer;
    else numerator = layer - index + 1;

    console.log(`${numerator}/${denominator}`);
}
