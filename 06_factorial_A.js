function factorialOfNum(num) {
  let  factorial = 1;
 if(num == null || num == undefined || num <= 0)

 {
    // return `it is invalid data`  OR
    var invalid= (`"${num}" this is invalid data`);
    return invalid;
  }
  
for (let index = num; index >=1; index--) {

 factorial = factorial*index;
 
}
return factorial
}
var result = factorialOfNum(5);
console.log(`The given no is "5" and factorial is: ${result}`);


var result = factorialOfNum(3);
console.log(`The given no is "3" and factorial is: ${result}`);


var result = factorialOfNum(null);
console.log(`   ${result}`);


var result = factorialOfNum(8);
console.log(`The given no is "8" and factorial is: ${result}`);


var result = factorialOfNum(undefined);
console.log(`   ${result}`);



var result = factorialOfNum(9);
console.log(`The given no is "9" and factorial is: ${result}`);



var result = factorialOfNum(0);
console.log(` ${result}`);


