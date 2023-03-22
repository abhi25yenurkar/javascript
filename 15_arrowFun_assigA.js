console.log(`******* STEP1 *******`);
//1. write no argument no return value inside arrow function log on console.
let arrowFun =() => {
 
    console.log ("Good Morning,Today is Monday");  // all function define
}
arrowFun ();// function call.




console.log(`******* STEP2 *******`);
//2. write arrow function with argument and no return value.

let show = (no1, no2, no3=1) => {   // passed default value in parameter .

console.log(`multiplication of numbers ${no1} * ${no2} * ${no3} is: ${no1*no2*no3}`);

}
show(5,5,2);
show(10,4,);  // function call




console.log(`******* STEP3 *******`);
//3. with 5 argument and return value.
let addition =(v1,v2,v3,v4,v5)=>{

    

   return (` ${v1},${v2},${v3},${v4},${v5} is: ${v1+ v2 +v3 + v4 + v5} `);
 
 }
 let add = addition(100,100,200,349,756);
 console.log(` addition of: ${add}`);
let concat = addition(" I am "," learning "," ES6 "," featuers "," in depth. ");
console.log(` concat: ${concat}`);