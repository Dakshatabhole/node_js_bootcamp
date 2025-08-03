//find the sum of all numbers below 1000 that are divisible by 3 or 5

let sum=0;
for(let i=0; i<1000; i++){
    if(i%3==0 || i%5==0){
     sum = sum+i;
    }
    }
console.log(`The sum is: ${sum}`);