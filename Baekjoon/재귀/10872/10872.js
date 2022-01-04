let num = +require('fs').readFileSync('예제.txt').toString().trim();
function fac(num) {
    return num > 0 ? num * fac(num - 1) : 1;
}
console.log(fac(num));
