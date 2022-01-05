let num = +require('fs').readFileSync('예제.txt').toString().trim();
const fibonacchi = (num) => (num <= 1 ? num : fibonacchi(num - 1) + fibonacchi(num - 2));
console.log(fibonacchi(num));
