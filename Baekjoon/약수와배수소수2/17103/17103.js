const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let x = 0; x < N; x++) {
  const currentNumber = rest[x];

  let board = Array.from({ length: currentNumber }).fill(true);
  for (let y = 2; y <= Math.floor(Math.sqrt(currentNumber)); y++) {
    for (let z = 2; z * y <= currentNumber; z++) {
      board[z * y - 1] = false;
    }
  }

  const primeMap = new Map();
  board.forEach((value, index) => {
    if (value && index !== 0) primeMap.set(index + 1, index + 1);
  });

  const setPartition = new Map();
  for (let value of primeMap.keys()) {
    primeMap.has(currentNumber - value) &&
      setPartition.set(value, currentNumber - value);
  }

  for (let [key, value] of setPartition) {
    if (key === value) continue;
    setPartition.get(value) === key && setPartition.delete(key);
  }

  console.log(setPartition.size);
}
