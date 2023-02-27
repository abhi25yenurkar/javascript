
console.log("******* STEP1 *******");

function maleMarriageEligibility(gender,age,boyName) {
      if(gender=="male" && age>=21)                                     // function with arg with return.

   {
        return `Hey  "${boyName}" You are eligiable for marriage`;
   }
   else
   { 
        return `Hey  "${boyName}" Sorry You are not eligiable for marriage`;
   }

  
}
   result = maleMarriageEligibility("male",25,"Billagates");              // old method function call.

 console.log(result);
console.log(`${maleMarriageEligibility("male",17,"stew Jobs")}`);         // new method direct by sir.



console.log("******* STEP2 *******");

 
function femaleMarriageEligibility(gender,age,girlName) {                // with argument with return.
  
  if (gender=="female"&& age>=18) 
  {
    return `Hey  "${girlName}" You are eligiable for marriage`;
  } 
  else 
  {
    return ` Hey "${girlName}" Sorry You are not eligiable for marriage`;
  }
}

 result = femaleMarriageEligibility("female",16,"Jenifer Alex");          // old method function call.
 console.log(result);

 result = femaleMarriageEligibility("female",27,"Malindra Gates");   // old method function call.
 console.log(result);