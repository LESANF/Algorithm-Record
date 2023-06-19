const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim();

const chant = new Map();
chant.set("SONGDO", "HIGHSCHOOL");
chant.set("CODE", "MASTER");
chant.set("2023", "0611");
chant.set("ALGORITHM", "CONTEST");

console.log(chant.get(input));
