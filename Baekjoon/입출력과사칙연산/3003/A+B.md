### A+B

## 문제

```
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
```

## 입력

```
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
```

## 예제 입력

```
1 2
```

## 예제 출력

```
3
```

## 내 제출

```
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim().split(' ');

let ans = 0;

for (let i = 0; i < input.length; i++) {
    ans += Number(input[i]);
}

console.log(ans);

```
