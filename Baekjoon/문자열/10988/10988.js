const fs = require("fs");
const input = fs.readFileSync("예제.txt").toString().trim();

const solution = () => {
  if (input === input.split("").reverse().join("")) return 1;
  else return 0;
};

console.log(solution());
