const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]); // 정점의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)
let graph = []; // 그래프 정보 입력
let visited = new Array(n + 1).fill(false);
let count = 0;

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(x) {
  visited[x] = true;
  count++;

  for (y of graph[x]) {
    if (!visited[y]) dfs(y);
  }
}

dfs(1);
console.log(count - 1);
