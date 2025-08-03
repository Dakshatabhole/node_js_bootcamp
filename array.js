//let numbers = [];



//for (let i = 0; i < 100; i++) {
 //   numbers[i] = i+1;
//}

//for (let i = 0; i < numbers.length; i++) {
 //   numbers[i] = numbers[i] * 3;
//}

//for(let i=0; i<numbers.length; i++){
 //   if(numbers[i]% 5 ==0){

 //   }
//}

//console.log(numbers);

let a = [];


for (let i = 1; i <= 100; i++) {
    a.push(i);
}


let sum = a
    .map(x => x * 3).filter(x => x % 5 === 0).reduce((acc, x) => acc + x, 0); 

console.log(sum);
