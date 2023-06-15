const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
const pokemonEncyclopedia = input.slice(0, N);
const searchValue = input.slice(N);

const stringDic = new Map();
const numberDic = new Map();

pokemonEncyclopedia.forEach((value, index) =>
  stringDic.set(value, index + 1 + "")
);
pokemonEncyclopedia.forEach((value, index) =>
  numberDic.set(index + 1 + "", value)
);

const ans = [];

searchValue.forEach((value) => {
  if (stringDic.has(value)) ans.push(stringDic.get(value));
  else ans.push(numberDic.get(value));
});

console.log(ans.join("\n"));
