let num = +require('fs').readFileSync('예제.txt').toString().trim();

const pattern = (num) => {
    const centerBlank = parseInt(num / 3) * parseInt(num / 3);
    console.log(centerBlank);
};

pattern(num);
