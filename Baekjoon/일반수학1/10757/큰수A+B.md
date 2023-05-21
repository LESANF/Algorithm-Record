### 큰 수 A+B

## 문제

```
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
```

## 입력

```
첫째 줄에 A와 B가 주어진다. (0 < A,B < 1010000)
```

## 출력

```
첫째 줄에 A+B를 출력한다.
```

## 예제 입력

```
9223372036854775807 9223372036854775808
```

## 예제 출력

```
18446744073709551615
```

## 풀이

```js
JS에서 Number는 한정된 숫자를 담을 수 있다.

BigInt를 사용하여 큰수의 계산을 할 수 있음.

출력시 숫자마지막에 'n'이 붙어서 나온다.

이를 제거하려면 string형으로 형변환 해야함.
```

## 내 제출

```js
const fs = require('fs');
const [a, b] = fs
    .readFileSync('예제.txt')
    .toString()
    .trim()
    .split(' ')
    .map((ele) => BigInt(ele));
const ans = a + b;
console.log(ans.toString());
```

## 숏코딩 + 모범답안

```js
console.log(
    (require('fs').readFileSync('/dev/stdin') + '')
        .split(' ')
        .map(BigInt)
        .reduce((a, b) => a + b) + ''
);

형변환 할 때, 굳이 함수로 return시키지 않아도됨.

문자열로 형변환 할 때, String(x), x.toString() 도 있지만

숫자에 문자열을 더해주면 자동으로 형변환됨
```
