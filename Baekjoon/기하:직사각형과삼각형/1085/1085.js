const fs = require("fs");
const [x, y, w, h] = fs.readFileSync("예제.txt").toString().trim().split(" ").map(Number);

// 상, 하, 좌, 우 를 구해서 가직 작은 값이 답
// 현재 위치는 x, y
// 사각형의 끝 지점은 w, h
// 사각형의 가로길이는 w
// 사각형의 세로길이는 h
// h - y (상)
// w - x (우)
// y (하)
// x (좌)

let shortestDistance = Number.MAX_SAFE_INTEGER;
if (shortestDistance >= h - y) shortestDistance = h - y;
if (shortestDistance >= w - x) shortestDistance = w - x;
if (shortestDistance >= y) shortestDistance = y;
if (shortestDistance >= x) shortestDistance = x;
console.log(shortestDistance);
