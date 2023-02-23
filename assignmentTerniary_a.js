console.log("******* STEP 1 *******");
function greaterNumber(n1,n2) {                 // with argument no return
    
    var largest;
    largest =(n1>n2)? n1 : n2;
    console.log(`Largest no between ${n1} and ${n2} is:  ${largest}`);
}greaterNumber(10,-10);
greaterNumber(800,899);


console.log("******* STEP 2 *******");            // with argument no return.

function isEvenOrOddNum(args1) {
    var result;
    result = args1 %2 ==0? "True" : "False";
  console.log(`The ${args1} number is even: ${result}`);

} isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);


console.log("******* STEP 3 *******");  // with argument with return.


function wordLength(word){
 var xyz = word.length;
 var result = xyz % 2==0 ? "Even":"Odd";
return result;
}
 var result = wordLength("JavaScript");                                        // function call
console.log(`The word "JavaScript" has ${result} length` );
console.log(`The word "Developer" has ${wordLength("Developer")} length`);    // advance method direct go to function.
console.log(`The word "Google" has ${wordLength("Google")} length`);         // advance method direct go to function.





