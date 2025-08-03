const users = [{name:'Alice', age:25}, {name:'Bob', age:30}, {name:'Charlie', age:25}];
//what is the average age of everyone?

let TA = users.reduce((a, users) => a + users.age, 0);
let AA = TA / users.length;
console.log(AA);