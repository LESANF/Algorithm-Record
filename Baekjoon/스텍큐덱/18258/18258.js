const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const queueAnswer = [];

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if (this.getLength() === 0) {
      return -1;
    } else {
      const removeData = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return removeData;
    }
  }

  peekHead() {
    if (this.getLength() === 0) return -1;
    else return this.items[this.headIndex];
  }

  peekTail() {
    if (this.getLength() === 0) return -1;
    else {
      return this.items[this.tailIndex - 1];
    }
  }
}

const queue = new Queue();

rest.map((v) => {
  const [step, data] = v.split(" ");

  switch (step) {
    case "push":
      queue.enqueue(data);
      break;
    case "pop":
      queueAnswer.push(queue.dequeue());
      break;
    case "size":
      queueAnswer.push(queue.getLength());
      break;
    case "empty":
      queueAnswer.push(queue.getLength() === 0 ? 1 : 0);
      break;
    case "front":
      queueAnswer.push(queue.peekHead());
      break;
    case "back":
      queueAnswer.push(queue.peekTail());
      break;
  }
});

console.log(queueAnswer.join("\n"));
