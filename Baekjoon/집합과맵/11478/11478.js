const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

let result = [];
for (let i = 1; i <= input.length; i++) {
  for (let j = 0; j <= input.length - i; j++) {
    console.log(j, j + i, " | ", j, " | ", i);
  }
}

// console.log(new Set(result).size);

// while (cnt < word.length) {
//   // for (let i = 0; i < word.length; i++) {
//   //   if (word.slice(i, i + n).length === n)
//   //     ans.push(word.slice(i, i + n).join(""));
//   // }

//   for (let i = 0; i < word.length; i++) {
//     console.log(dic[i + n]);
//   }

//   n++;
//   cnt++;
// }

// while (cnt < word.length) {
//   for (let i = 0; i < word.length; i++) {
//     if (word.slice(i, i + n).length === n)
//       ans.push(word.slice(i, i + n).join(""));
//   }
//   n++;
//   cnt++;
// }

// console.log(new Set(ans).size);
