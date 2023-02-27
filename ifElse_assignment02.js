
console.log("******* STEP1*******");

function checkEvenOdd(no){                      // with argument with return.
if (no%2==0) 
{
    return `The ${no} Number is Even`;
}
else
{
    return `The ${no} Number is Odd`;
}
}
  result  = checkEvenOdd(45);
  console.log(result);

console.log(`${checkEvenOdd(70)}`);                                          // new method by sir call.
console.log(`${checkEvenOdd(67)}`); 
console.log(`${checkEvenOdd(98)}`); 



console.log("******* STEP2 *******");

function vote(age){                                                           // with args without return.

    if(age>=18)
    {
      console.log(`Your Age is ${age} You are Eligiable For Voting`)
    }                                                                         // function defination.

    if (age<18)
    {
        console.log(` Sorry Your Age is ${age} You Are Not Eligiable For Voting`)
    }
}
vote(18);
vote(20);
vote(17);                                                                      // function call.
vote(40);



console.log("******* STEP3 *******");

function checkCharacter(nameOfLanguage) {
    
    if(nameOfLanguage.length>10)
    {
           console.log(`Yes "${nameOfLanguage}" Contain More Than 10 Character `);
    }
}
checkCharacter("JavaScript-ES6");


console.log("******* STEP4 *******");

function checkStartWith(str) {
    if (str.startsWith("Java") ) {
        console.log(` Yes "${str}" String Start with "Java" `);
    }

    if(! str.startsWith("Java"))

    {
        console.log(` Sorry "${str}" String not Start with "Java" `);
    
    }
}
checkStartWith("JavaScript Language");