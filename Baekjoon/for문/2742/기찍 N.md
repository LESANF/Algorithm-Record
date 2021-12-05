# 기찍 N

## 문제

```
자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
```

## 입력

```
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
```

## 출력

```
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.
```

## 예제 입력

```
5
```

## 예제 출력

```
5
4
3
2
1
```

## 내 제출(1~ n까지 합을 구하는 공식사용)

```js
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let a = parseInt(input[0]);

console.log((a * (a + 1)) / 2);
```

## For문을 이용한 풀이

```
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = Number(input[0]);
let result = 0;

for (let i = 1; i <= count; i++) {
  result += i;
}

console.log(result);
```
