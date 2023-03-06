console.log('******* STEP1 *******');
//1. FIND THE FIRST ELEMENT IN ARRAY
const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(`Given array: ${arraySeasonalFruits}`);
let result = arraySeasonalFruits[0];
console.log(`The first  element is:  '${result}'`);

// 2. FIND LAST ELEMENT IN ARRAY
result  =  arraySeasonalFruits[4];
console.log(`The last  element is:  '${result}'`);



console.log('******* STEP2 *******');
// ADD ELEMENT PAPAYA BEFORE THE ELEMENT BANANA AND LOG ON CONSOLE.

console.log(`Before adding "Papaya":  ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya")
console.log(`After adding  "Papaya":  ${arraySeasonalFruits} `);



console.log('******* STEP3 *******');
// REMOVE MANGO FROM THE ARRAY.
console.log(`Before Removing "Mango":  ${arraySeasonalFruits}`);
  arraySeasonalFruits.splice(4,1);
console.log(`After Removing "Mango":   ${arraySeasonalFruits}`);

console.log('******* STEP4 *******');
// ADD OR INSERT AN ELEMENT PINEAPPLE AT LAST POSITION.

console.log(`Before adding "Pineapple":  ${arraySeasonalFruits}.`);

arraySeasonalFruits.push("Pineapple")
console.log(`After adding "Pineapple":  ${arraySeasonalFruits}.`);

console.log('******* STEP5 *******');
//INSERT ELEMENT DRAGON FRUIT BEFORE WATER MELON.

console.log(`Before adding "Dragon Fruit": ${arraySeasonalFruits}.`);

arraySeasonalFruits.splice(4,0,"Dragon Fruit");

console.log(`After adding "Dragon Fruit":  ${arraySeasonalFruits}.`);


console.log('******* STEP6 *******');
// REPLACE AN ELEMENT AN ORANGE WITH KIWI.
console.log(`Before Replace an Element "Orange With kiwi":  ${arraySeasonalFruits}.`);
arraySeasonalFruits.splice(2,1,"kiwi");
console.log(`After Replace an Element "Orange With Kiwi": ${arraySeasonalFruits}.`);


console.log('******* STEP7 *******');
// LOG THE ELEMENT STARTING FROM INDEX 1 TO 4.
console.log(`Array elements:  ${arraySeasonalFruits}.`);

let ans= arraySeasonalFruits.slice(1,5);
console.log(`elements from index 1 to 4 : ${ans}.`);

console.log('******* STEP8 *******');
// ONLY SELECT LAST 3 ELEMENT AND LOG ON CONSOLE: USING LENGTH PROPERTY.
console.log(`Array is: ${arraySeasonalFruits}.`);

 let   finalAns=arraySeasonalFruits.slice(-3);
 
 console.log(`Last Three Element in array is: ${finalAns}.`);