
console.log("******* Step1 *******");

function maleMarriageEligibility(gender,age,boyName) {         // with args with return.
    
    var result = ( gender=="male" &&  age>=21)? `Hey  ${boyName} You are eligiable for marriage` :  `Hey  ${boyName} You are not eligiable for marriage`; 
    return result;
}
 result = maleMarriageEligibility("male",21,"Rahul");  // function call.
 console.log(`${result}`);
 result = maleMarriageEligibility("male",25,"Billgates");
 console.log(`${result}`);
 result = maleMarriageEligibility("male",17,"Stew Jobs");
console.log(`${result}`);

console.log("******* Step2 *******");



function femaleMarriageEligibility(gender,age,girlName){
 
    var result = (gender=="female"&& age>=18)? `Hey ${girlName} You are Eligiable for marriage` : `Hey ${girlName} You are not eligiable for marriage`;
    return result;

}
result = femaleMarriageEligibility("female",18,"Isha"); // old method
console.log(`${result}`);

console.log(`${femaleMarriageEligibility("female",16,"Jenifer")}`); // new method.
console.log(`${femaleMarriageEligibility("female",27,"Malinda Gates")}`); // new method.
