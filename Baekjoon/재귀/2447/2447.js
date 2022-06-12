let num = +require('fs').readFileSync('예제.txt').toString().trim();

const pattern = (num) => {
    const center = num / 2;
    console.log(center);
    for (let i = 0; i < num; i++) {}
};

pattern(num);
