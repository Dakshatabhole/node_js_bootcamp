//sum of all even fibonacci numbers under 4,000,000
let sum = 0;
let a = 1;
let b = 1;
let c = 0;

while (c < 4000000) {
    c = a + b;
    a = b;
    b = c;

    if (c % 2 === 0) {
        sum += c;
    }
}

console.log(`The sum is: ${sum}`);
