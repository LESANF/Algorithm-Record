### fs 모듈을 이용하는 방법(백준 제출용)

## 1) 한 줄로 입력을 받을 때

```js
//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

for (let i = 1; i <= num; i++) {
    console.log(i);
}
```

## 2) 여러 줄로 입력을 받을 때

```js
//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for (let i = 0; i < numbers.length; i++) {
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);

    console.log(num1 + num2);
}
```

fs 모듈을 이용하는 방법(vscode에서 테스트용)
🍼 우선 vscode에서 'npm install fs'로 파일시스템을 설치해줍니다.

🍼 저는 문제를 풀 때마다 예제.txt에다가 예제를 복사한 후 실행해볼려고 예제.txt를 만들었습니다.

🍼 아래와 같이 readFileSync의 경로를 예제.txt의 위치로 수정해주면 됩니다. (이후 다음 방법은 백준 제출용과 같습니다. readFileSync로 txt 파일을 읽어와서 toString과 split을 이용하여 배열로 만들어 input으로 저장한 것이기 때문에 나머지는 알아서 유동적으로 수정하여 사용하면 됩니다. Number 메소드를 이용하여 숫자로 변경한다던지.. )

🍼 vscode에서 실행할 때에는 ctrl+ ` 키를 이용하여 콘솔을 켜준 후 콘솔창에 'node 현재작성한js파일경로' 이렇게 써주시면 되고, 파일경로는 참고로 현재 작성한 js 파일을 vscode에서 오른쪽마우스를 누르면 Copy relative path가 나오는데 그걸 눌러서 복사하면 됩니다.

```
출처: https://nyang-in.tistory.com/156
```
