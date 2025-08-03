function area(length, width=1){
    return length*width;
}

const rectarea = area(10,5)
console.log(`Area of 10x5 rectangle is: ${rectarea}`);

//using default parameter
const sqarea = area(8);
console.log(`Area of square with side 8 is: ${sqarea}`);