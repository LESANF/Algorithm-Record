const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, ...logData] = input;

const personDic = {};
const ans = [];

logData.forEach((value) => {
  const [name, log] = value.split(" ");
  personDic[name] = log;
});

for (let value in personDic) {
  if (personDic[value] === "enter") ans.push(value);
}

console.log(ans.sort().reverse().join("\n"));
