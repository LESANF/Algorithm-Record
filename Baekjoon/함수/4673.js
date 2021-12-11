const dnAry = [];

const dn = (n) => {
    let sum = n;
    while (n != 0) {
        sum += n % 10;
        n = parseInt(n / 10);
    }
    return sum;
};

for (let i = 1; i <= 10000; i++) {
    dnAry.push(dn(i));
}

for (let j = 1; j <= 10000; j++) {
    if (dnAry.indexOf(j) === -1) console.log(j);
}
