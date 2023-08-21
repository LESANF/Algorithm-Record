const fs = require("fs");
const [N, ...rest] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "예제.txt")
  .toString()
  .trim()
  .split("\n");

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  pushFront(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.front = node;
      this.rear = node;
    } else {
      this.front.prev = node;
      node.next = this.front;
      this.front = node;
    }
    this.length++;
  }

  pushBack(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }
    this.length++;
  }

  popFront() {
    if (this.length === 0) {
      return -1;
    }
    const temp = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    this.length--;
    return temp.value;
  }

  popBack() {
    if (this.length === 0) {
      return -1;
    }
    const temp = this.rear;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
    }
    this.length--;
    return temp.value;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0 ? 1 : 0;
  }

  frontPeek() {
    if (this.length === 0) return -1;
    else return this.front.value;
  }

  backPeek() {
    if (this.length === 0) return -1;
    else return this.rear.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

let deque = new Deque();
let ans = [];

rest.forEach((element) => {
  const orderNum = +element.split(" ")[0];
  const pushNum = +element.split(" ")[1];

  if (orderNum === 1) {
    deque.pushFront(pushNum);
  } else if (orderNum === 2) {
    deque.pushBack(pushNum);
  } else if (orderNum === 3) {
    ans.push(deque.popFront());
  } else if (orderNum === 4) {
    ans.push(deque.popBack());
  } else if (orderNum === 5) {
    ans.push(deque.size());
  } else if (orderNum === 6) {
    ans.push(deque.isEmpty());
  } else if (orderNum === 7) {
    ans.push(deque.frontPeek());
  } else if (orderNum === 8) {
    ans.push(deque.backPeek());
  }
});

console.log(ans.join("\n"));
