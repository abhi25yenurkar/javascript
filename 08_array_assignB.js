const arrayOfNumbers = [20,31,40,25,23,11,29,9,60,2,11]
// 1. FIND TOTAL ELEMENTS AVAILABLE OR LENGTH IN ARRAY
console.log("******* STEP1 *******");

const totalElementsAvailable = arrayOfNumbers.length;
console.log(`The total elements available in array is: ${totalElementsAvailable}`);

// 2.(1)LOG FIRST  ELEMENT IN ARRAY.
console.log("******* STEP 2.(1) *******");
const firstElement = arrayOfNumbers.slice(0,1);
 console.log(`The first element available in array is: ${firstElement}`);

 // 2.(1). LOG LAST  ELEMENT IN ARRAY.
 console.log("******* STEP 2.(2) *******");
 const lastElement = arrayOfNumbers.slice(10);
 console.log(`The last element available in array is: ${lastElement}`);

 // 3. LOG THIRD LAST ELEMENT USING LENGTH PROPERTY.
 console.log("******* STEP 3 *******");
//  const thirdLastElement = arrayOfNumbers.slice(8,-2); OR
const thirdLastElement = arrayOfNumbers[arrayOfNumbers.length-3]
 console.log(`The thirdlast element is: ${thirdLastElement}`);


 // 4. FIND ALL EVEN AND ODD NUMBERS IN ARRAY.
 console.log("******* STEP 4&5 *******");

 const evenNo = arrayOfNumbers;
for (let index = 0; index < evenNo.length; index++) {
    const element = evenNo[index];
    
    if(element % 2 == 0)
    {
        console.log(`The even numbers is: ${element} `);
    }
    else if (element % 2!==0){
         console.log(`The odd numbers is: ${element}`);
    }
}

// 6. FIND ALL EVEN POSITIONED ELEMENTS FROM ARRAY, SUM IT AND LOG.
console.log("******* STEP 6 *******");

let add = 0;

for (  let index = 0; index < arrayOfNumbers.length; index=index+2) {
     
    
     console.log(arrayOfNumbers[index]);
   
     add = add + arrayOfNumbers[index];


}console.log(`sum of even position in array is ${add}`);



//  7. FIND ALL ODD POSITIONED ELEMENTS FROM ARRAY, SUM IT AND LOG.
console.log("******* STEP 7 *******");
let sum = 0;
for (  let index = 1; index < arrayOfNumbers.length; index=index+2) {
     
    
    console.log(arrayOfNumbers[index]);
  
    sum = sum + arrayOfNumbers[index];


}console.log(`sum of Odd position in array is ${sum}`);




// FIND THE SUM OF ALL ELEMENTS IN ARRAY .
console.log("******* STEP 8 *******");
let addition = 0;

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    
    addition = addition+element;
    console.log(element);
}
console.log(`The sum of all elements is:${addition}`);



// FIND THE NUMBERS WHICH ARE MULTIPLE OF 5.
console.log("******* STEP 9 *******");
console.log("multiple of 5:");
const multiple = arrayOfNumbers;
 
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    
    if(element % 5 ==0){
        
        console.log(element);
    }
    }
    

// isnumber 115 available in array numbers.
    console.log("******* STEP 10 *******");

    const isAvailable = arrayOfNumbers
    console.log("isNumber 115 available in array is:",isAvailable.includes(115));


    
// isnumber 23 available in array numbers.
console.log("******* STEP 11 *******");

const Available = arrayOfNumbers
console.log("isNumber 23 available in array is:",Available.includes(23));




// INSERT NUMBER 55,66 BEFORE INDEX 3 AND LOG ON CONSOLE.
console.log("******* STEP 12 *******");
const insert = arrayOfNumbers

insert.splice(3,0,55,60);
console.log("Inserting number 55,66 before index3:",insert);




console.log("******* STEP 13 *******");
// DELETE 3 ELEMENTS STARTING FROM INDEX 4 AND LOG ARRAY OM CONSOLE.

const remove = insert
remove.splice(4,3);
console.log("Delete 3 eleements starting from index 4:",remove);