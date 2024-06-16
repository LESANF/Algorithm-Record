const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const ans = [];

const checkVPS = (value) => {
  const word = value;
  const vpsCheck = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "(") vpsCheck.push(word[i]);
    if (word[i] === ")") {
      if (vpsCheck.length === 0) {
        ans.push("NO");
        return;
      } else {
        vpsCheck.pop();
      }
    }
  }

  if (vpsCheck.length === 0) ans.push("YES");
  else ans.push("NO");
};

rest.forEach((v) => {
  checkVPS(v);
});

console.log(ans.join("\n"));
