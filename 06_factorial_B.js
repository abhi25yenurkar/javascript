function factorialWordsCount(no) {
    
   if(no==undefined||no==null||(isNaN(no)&& typeof str=="number")||no=="")

   {
       return value =`"${no}" is invalid, please enter valid data.`;
   }
   let count = no.split(" ").length;
   let factorial = 1;
   for(index=count;index>=1;index--)

   {
       factorial = factorial*index;
   }
   return `The string is "${no}" and total number of words are ${count} factorial is ${factorial}.`;
}
let result =factorialWordsCount("Revision is the mother of success");
console.log(result);



 result = factorialWordsCount("We Never fail we always learn");
console.log(result);

 result =factorialWordsCount(null);
console.log(result);


result =factorialWordsCount("");
console.log(result);


result = factorialWordsCount("Abhishek Sahebrao Yenurkar");
console.log(result);

