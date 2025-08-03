//what is the largest prime factor of 600851475143

let num= 600851475143;
let factor = 2;
let largestf = 0;

while(num>1){
    if(num % factor ==0){
        largestf = factor;
        num /= factor;

    while(num % factor ==0){
        num /= factor;
    }
    }
    factor +=1;
}
console.log(`Largest prime factor is: ${largestf}`);