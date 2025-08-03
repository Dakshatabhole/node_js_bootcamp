//sum of the digits of 100!
let fact=1n;
for(let i=100n; i>1n; i--){
    fact *= i;
}
//console.log(BigInt(fact));
//fact to string to extract the digits
let factst = fact.toString();
let sum=0;
for(let i=0; i<factst.length; i++){
    sum +=Number(factst[i]);
}

console.log(`The sum of the digits of 100! is: ${sum}`);