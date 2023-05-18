let num = +require("fs").readFileSync("예제.txt").toString().trim();

const line = 2 * num - 1;
const middleLine = Math.ceil(line / 2);
const ans = [];

for (let i = 1; i <= line; i++) {
  if (i === middleLine) {
    const drawStar = "*".repeat(line);
    ans.push(drawStar);
  } else if (i < middleLine) {
    const blank = " ".repeat(middleLine - i);
    const drawStar = "*".repeat(2 * i - 1);
    ans.push(blank + drawStar);
  }
}

for (let j = middleLine - 1; j > 0; j--) {
  const blank = " ".repeat(middleLine - j);
  const drawStar = "*".repeat(2 * j - 1);
  ans.push(blank + drawStar);
}

console.log(ans.join("\n"));
