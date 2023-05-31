const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const startBlackChessBoard = Array.from(Array(8), () => Array(8).fill(""));
const startWhiteChessBoard = Array.from(Array(8), () => Array(8).fill(""));

let black = true;
let white = true;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (black) {
      startBlackChessBoard[i][j] = "B";
      black = !black;
    } else {
      startBlackChessBoard[i][j] = "W";
      black = !black;
    }

    if (white) {
      startWhiteChessBoard[i][j] = "W";
      white = !white;
    } else {
      startWhiteChessBoard[i][j] = "B";
      white = !white;
    }

    if (j === 7) {
      black = !black;
      white = !white;
    }
  }
}

const N = input[0].split(" ")[0]; // 10
const M = input[0].split(" ")[1]; // 13
input.shift();
const chessBoard = input.map((v) => v.split(""));

let ansPaintBlackBoard = Number.MAX_SAFE_INTEGER;
let ansPaintWhiteBoard = Number.MAX_SAFE_INTEGER;

let initStartPos = 0;
let initEndPos = 0;

do {
  let repaintBlackBoard = 0;
  let repaintWhiteBoard = 0;

  let [checkPosX, checkPosY] = [0, 0];
  for (let i = initStartPos; i <= 7 + initStartPos; i++) {
    checkPosY = 0;
    for (let j = initEndPos; j <= 7 + initEndPos; j++) {
      if (chessBoard[i][j] !== startBlackChessBoard[checkPosX][checkPosY])
        repaintBlackBoard++;
      if (chessBoard[i][j] !== startWhiteChessBoard[checkPosX][checkPosY])
        repaintWhiteBoard++;

      checkPosY++;
    }
    checkPosX++;
  }

  if (repaintBlackBoard <= ansPaintBlackBoard)
    ansPaintBlackBoard = repaintBlackBoard;
  if (repaintWhiteBoard <= ansPaintWhiteBoard)
    ansPaintWhiteBoard = repaintWhiteBoard;

  if (initEndPos + 7 < M - 1) initEndPos++;
  else {
    initStartPos++;
    initEndPos = 0;
  }
} while (initStartPos + 7 < N);

console.log(Math.min(ansPaintWhiteBoard, ansPaintBlackBoard));
