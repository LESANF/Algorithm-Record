const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

// n 층, m 교실, 이동 1분 , k개의 반 반은 1번부터 k번,
const [N, M, K] = input.shift().split(" ").map(Number);

const ans = {
  classNum: Number.MAX_SAFE_INTEGER,
  distance: Number.MAX_SAFE_INTEGER,
};

input.forEach((value, index) => {
  const goal = [1, M + 2];
  const x = value.split(" ")[0];
  const y = value.split(" ")[1];
  const disTance = Math.abs(x - goal[0]) + Math.abs(y - goal[1]);

  if (ans.distance > disTance) {
    ans.distance = disTance;
    ans.classNum = index + 1;
  } else if (ans.distance === disTance) {
    if (ans.classNum > index + 1) ans.classNum = index + 1;
  }
});

console.log(ans.classNum);
