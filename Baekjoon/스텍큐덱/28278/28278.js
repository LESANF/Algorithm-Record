const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

const stackAnswer = [];

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmptyCheck() {
    return this.head === null;
  }

  stackPush(value) {
    const newStackNode = new Node(value);
    if (this.isEmptyCheck()) {
      this.head = newStackNode;
      this.size++;
    } else {
      newStackNode.next = this.head;
      this.head = newStackNode;
      this.size++;
    }
  }

  stackPop() {
    if (this.isEmptyCheck()) {
      return -1;
    } else {
      const removeData = this.head.data;
      this.head = this.head.next;
      this.size--;
      return removeData;
    }
  }

  stackPeek() {
    if (this.isEmptyCheck()) return -1;
    else return this.head.data;
  }

  stackSize() {
    return this.size;
  }
}

const stack = new Stack();

rest.map((v) => {
  const [step, value] = v.split(" ");

  switch (+step) {
    case 1:
      stack.stackPush(value);
      break;
    case 2:
      stackAnswer.push(stack.stackPop());
      break;
    case 3:
      stackAnswer.push(stack.stackSize());
      break;
    case 4:
      stackAnswer.push(stack.isEmptyCheck() ? 1 : 0);
      break;
    case 5:
      stackAnswer.push(stack.stackPeek());
      break;
  }
});

console.log(stackAnswer.join("\n"));
